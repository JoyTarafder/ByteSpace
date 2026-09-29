import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const SCREENSHOT_DIR = path.join(process.cwd(), "public", "screenshots", "desktop");

const ROUTES_TO_TEST = [
  {
    name: "home",
    path: "/",
    expectedTitle: "ByteSpace — Online Learning & Creative Skill Courses",
  },
  {
    name: "search",
    path: "/search",
    expectedTitle: "ByteSpace",
  },
  {
    name: "creator",
    path: "/creators/sarah-jenkins",
    expectedTitle: "ByteSpace",
  },
  {
    name: "details",
    path: "/courses/build-digital-asset-comprehensive-guide",
    expectedTitle: "ByteSpace",
  },
  {
    name: "lessons",
    path: "/courses/build-digital-asset-comprehensive-guide/lessons",
    expectedTitle: "ByteSpace",
  },
  {
    name: "reviews",
    path: "/courses/build-digital-asset-comprehensive-guide/reviews",
    expectedTitle: "ByteSpace",
  },
  {
    name: "login",
    path: "/login",
    expectedTitle: "ByteSpace",
  },
  {
    name: "register",
    path: "/register",
    expectedTitle: "ByteSpace",
  },
  {
    name: "not-found",
    path: "/random-invalid-route-for-404",
    expectedTitle: "404 — Page Not Found",
  },
];

test.beforeAll(() => {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
  }
});

for (const route of ROUTES_TO_TEST) {
  test(`Visual baseline capture for ${route.name} (${route.path})`, async ({
    page,
  }) => {
    // Set 1440px desktop reference width
    await page.setViewportSize({ width: 1440, height: 900 });

    // Navigate to route
    await page.goto(route.path, { waitUntil: "networkidle" });

    // Wait for fonts ready
    await page.evaluate(() => document.fonts.ready);

    // Disable CSS animations & transitions for deterministic visual snapshot
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

    // Scroll down and back up to trigger intersection observers for all images
    await page.evaluate(async () => {
      const step = 800;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(300);

    // Verify page has rendered without horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalOverflow).toBeFalsy();

    // Verify all rendered images loaded properly
    const brokenImagesCount = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll("img"));
      return images.filter((img) => img.complete && img.naturalWidth === 0).length;
    });
    expect(brokenImagesCount).toBe(0);

    // Capture full-page screenshot for baseline review
    const screenshotPath = path.join(SCREENSHOT_DIR, `${route.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const exists = fs.existsSync(screenshotPath);
    expect(exists).toBeTruthy();
  });
}
