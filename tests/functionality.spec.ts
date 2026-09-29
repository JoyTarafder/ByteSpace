import { test, expect } from "@playwright/test";

test.describe("Phase 11 — Functionality Acceptance Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and clear localStorage once at the start of each test
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.evaluate(() => window.localStorage.clear());
  });

  test("1. Search query input filters courses and updates URL", async ({ page }) => {
    await page.goto("/search", { waitUntil: "networkidle" });

    // Initial state: 18 courses in reference grid
    const cards = page.locator("article");
    await expect(cards).toHaveCount(18);

    // Type query in search input and submit
    const searchInput = page.getByRole("textbox", { name: "Search courses" });
    await searchInput.fill("Asset");
    await searchInput.press("Enter");

    // URL should include q=Asset
    await expect(page).toHaveURL(/q=Asset/i);

    // Filtered results should contain Asset in title
    await expect(page.locator("article").first()).toContainText(/Asset/i);
  });

  test("2. Category chips filter courses dynamically", async ({ page }) => {
    await page.goto("/search", { waitUntil: "networkidle" });

    // Click 'Marketing' category tab
    const marketingChip = page.getByRole("tab", { name: "Marketing", exact: true });
    await marketingChip.click();

    await expect(page).toHaveURL(/category=Marketing/i);

    // Courses should update to matching courses
    const cards = page.locator("article");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("3. Pagination updates page, URL, and displayed items", async ({ page }) => {
    await page.goto("/search?page=1", { waitUntil: "networkidle" });

    // Verify page 1 is active
    const page1Button = page.getByRole("button", { name: "Page 1" });
    await expect(page1Button).toHaveAttribute("aria-current", "page");

    // Click page 2
    const page2Button = page.getByRole("button", { name: "Page 2" });
    await page2Button.click();

    // URL should update to page=2
    await expect(page).toHaveURL(/page=2/);
    await expect(page2Button).toHaveAttribute("aria-current", "page");

    // Page 2 should display 6 cards
    const cards = page.locator("article");
    await expect(cards).toHaveCount(6);
  });

  test("4. Follow creator toggles state, updates metrics, and persists in localStorage", async ({ page }) => {
    await page.goto("/creators/sarah-jenkins", { waitUntil: "networkidle" });

    const followButton = page.getByRole("button", { name: "Follow", exact: true });
    await expect(followButton).toBeVisible();
    await expect(followButton).toHaveAttribute("aria-pressed", "false");

    // Click follow
    await followButton.click();
    const followingButton = page.getByRole("button", { name: "Following", exact: true });
    await expect(followingButton).toBeVisible();
    await expect(followingButton).toHaveAttribute("aria-pressed", "true");

    // Reload page to verify localStorage persistence
    await page.reload({ waitUntil: "networkidle" });
    const persistedFollowingButton = page.getByRole("button", { name: "Following", exact: true });
    await expect(persistedFollowingButton).toBeVisible();
    await expect(persistedFollowingButton).toHaveAttribute("aria-pressed", "true");

    // Unfollow
    await persistedFollowingButton.click();
    await expect(page.getByRole("button", { name: "Follow", exact: true })).toBeVisible();
  });

  test("5. Share Course button copies link to clipboard with visual feedback", async ({ page, context }) => {
    // Grant clipboard permissions
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/courses/build-digital-asset-comprehensive-guide", { waitUntil: "networkidle" });

    const shareButton = page.getByRole("button", { name: "Share", exact: true });
    await expect(shareButton).toBeVisible();

    await shareButton.click();

    // Check feedback updates to Copied!
    await expect(page.getByRole("button", { name: "Copied!", exact: true })).toBeVisible();
  });

  test("6. Course enrollment modal flow confirms enrollment and persists access", async ({ page }) => {
    await page.goto("/courses/build-digital-asset-comprehensive-guide", { waitUntil: "networkidle" });

    // Initial Enroll Now button in sidebar
    const enrollButton = page.getByRole("button", { name: "Enroll Now" });
    await expect(enrollButton).toBeVisible();

    // Click Enroll Now to open modal
    await enrollButton.click();

    // Dialog should be open
    const modal = page.getByRole("dialog");
    await expect(modal).toBeVisible();
    await expect(modal).toContainText("Confirm Course Enrollment");
    await expect(modal).toContainText("Prototype Notice");

    // Confirm enrollment
    const confirmButton = modal.getByRole("button", { name: "Confirm Free Enrollment" });
    await confirmButton.click();

    // Success state in modal
    await expect(modal).toContainText("Enrollment Successful!");

    // Close modal
    await modal.getByRole("button", { name: "Close" }).click();
    await expect(modal).not.toBeVisible();

    // Sidebar button should now indicate Enrolled state
    const accessButton = page.getByRole("link", { name: /Access Lessons/i });
    await expect(accessButton).toBeVisible();

    // Reload page to verify persistence
    await page.reload({ waitUntil: "networkidle" });
    await expect(page.getByRole("link", { name: /Access Lessons/i })).toBeVisible();
  });

  test("7. Course reviews star rating filter updates visible reviews", async ({ page }) => {
    await page.goto("/courses/build-digital-asset-comprehensive-guide/reviews", { waitUntil: "networkidle" });

    // All reviews initial state
    const reviewCards = page.locator("div.p-6.rounded-\\[20px\\]");
    await expect(reviewCards).toHaveCount(3);

    // Filter to 5 stars
    const fiveStarChip = page.getByRole("button", { name: "5", exact: true });
    await fiveStarChip.click();
    await expect(fiveStarChip).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("div.p-6.rounded-\\[20px\\]")).toHaveCount(3);

    // Filter to 1 star (no reviews exist for 1 star in mock)
    const oneStarChip = page.getByRole("button", { name: "1", exact: true });
    await oneStarChip.click();
    await expect(page.getByText("No reviews found with a 1-star rating.")).toBeVisible();

    // Click Show All Reviews to restore
    await page.getByRole("button", { name: "Show All Reviews" }).click();
    await expect(page.locator("div.p-6.rounded-\\[20px\\]")).toHaveCount(3);
  });

  test("8. Newsletter form validation, submission, and deduplication", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const emailInput = page.getByRole("textbox", { name: "Email address for newsletter" });
    const subscribeBtn = page.getByRole("button", { name: "Subscribe to newsletter" });

    // Test invalid email
    await emailInput.fill("invalid-email-address");
    await subscribeBtn.click();
    await expect(page.locator("#newsletter-error")).toContainText("Please enter a valid email address");

    // Test valid email submission
    await emailInput.fill("student.subscriber@example.com");
    await subscribeBtn.click();
    await expect(page.getByRole("status")).toContainText("Thank you for subscribing");

    // Test duplicate submission
    await emailInput.fill("student.subscriber@example.com");
    await subscribeBtn.click();
    await expect(page.getByRole("status")).toContainText("already subscribed");
  });

  test("9. Auth validation and status feedback on login and register", async ({ page }) => {
    // Test /login validation
    await page.goto("/login", { waitUntil: "networkidle" });
    const signInBtn = page.getByRole("button", { name: "Sign In", exact: true });

    await signInBtn.click();
    await expect(page.locator("#login-email-error")).toHaveText("Email is required");
    await expect(page.locator("#login-password-error")).toHaveText("Password is required");

    // Fill valid format and submit
    await page.getByLabel("Email").fill("designer@example.com");
    await page.getByLabel("Password").fill("secret123");
    await signInBtn.click();

    await expect(page.getByRole("status")).toContainText("Static demo notice: Frontend verification passed");

    // Test /register validation
    await page.goto("/register", { waitUntil: "networkidle" });
    const continueBtn = page.getByRole("button", { name: "Continue", exact: true });

    await continueBtn.click();
    await expect(page.locator("#register-fullname-error")).toHaveText("Full name is required");
    await expect(page.locator("#register-email-error")).toHaveText("Email is required");
    await expect(page.locator("#register-password-error")).toHaveText("Password is required");

    // Fill valid format and submit
    await page.getByLabel("Full Name").fill("Jane Doe");
    await page.getByLabel("Email").fill("jane.doe@example.com");
    await page.getByLabel("Password").fill("securepass123");
    await continueBtn.click();

    await expect(page.getByRole("status")).toContainText("Static demo notice: Frontend verification passed");
  });
});
