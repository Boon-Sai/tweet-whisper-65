from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the profile page
        page.goto("http://127.0.0.1:8080/profile")

        # 2. Wait for the page to load and verify the name
        expect(page.get_by_role("heading", name="Manoj")).to_be_visible()

        # 3. Take a screenshot
        page.screenshot(path="jules-scratch/verification/profile_page.png")

        browser.close()

if __name__ == "__main__":
    run_verification()
