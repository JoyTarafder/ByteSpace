import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const VIEWPORTS = [
  { name: "tablet-1024", width: 1024, height: 768 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
];

const ROUTES_TO_TEST = [
  { name: "home", path: "/" },
  { name: "search", path: "/search" },
  { name: "creator", path: "/creators/sarah-jenkins" },
  { name: "details", path: "/courses/build-digital-asset-comprehensive-guide" },
  { name: "lessons", path: "/courses/build-digital-asset-comprehensive-guide/lessons" },
  { name: "reviews", path: "/courses/build-digital-asset-comprehensive-guide/reviews" },
  { name: "login", path: "/login" },
  { name: "register", path: "/register" },
  { name: "not-found", path: "/random-invalid-route-for-404" },
];

for (const vp of VIEWPORTS) {
  const screenshotDir = path.join(process.cwd(), "public", "screenshots", vp.name);

  test.describe(`Responsive tests for ${vp.name} (${vp.width}x${vp.height})`, () => {
    test.beforeAll(() => {
      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
      }
    });

    for (const route of ROUTES_TO_TEST) {
      test(`Responsive capture for ${route.name} on ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });

        await page.goto(route.path, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);

        // Disable CSS animations & transitions
        await page.addStyleTag({
          content: `
            *, *::before, *::after {
              animation-duration: 0s !important;
              animation-delay: 0s !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          `,
        });

        // Scroll to trigger lazy loading
        await page.evaluate(async () => {
          const step = 600;
          for (let y = 0; y < document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 40));
          }
          window.scrollTo(0, 0);
        });
        await page.waitForTimeout(200);

        // Verify no horizontal overflow
        const overflowDetails = await page.evaluate(() => {
          const scrollWidth = document.documentElement.scrollWidth;
          const clientWidth = document.documentElement.clientWidth;
          return {
            hasOverflow: scrollWidth > clientWidth,
            scrollWidth,
            clientWidth,
          };
        });

        expect(
          overflowDetails.hasOverflow,
          `Route ${route.name} at ${vp.width}px overflowed: scrollWidth (${overflowDetails.scrollWidth}) > clientWidth (${overflowDetails.clientWidth})`
        ).toBeFalsy();

        // Verify zero broken images
        const brokenImages = await page.evaluate(() => {
          const images = Array.from(document.querySelectorAll("img"));
          return images
            .filter((img) => img.complete && img.naturalWidth === 0)
            .map((img) => img.src);
        });
        expect(brokenImages.length, `Broken images on ${route.name}: ${brokenImages.join(", ")}`).toBe(0);

        // Capture screenshot
        const screenshotPath = path.join(screenshotDir, `${route.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });

        expect(fs.existsSync(screenshotPath)).toBeTruthy();
      });
    }
  });
}
