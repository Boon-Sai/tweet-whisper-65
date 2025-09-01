from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the home page and verify dark theme
        page.goto("http://127.0.0.1:8080/")
        expect(page.locator("body")).to_have_css("color-scheme", "dark")
        page.screenshot(path="jules-scratch/verification/01_home_page_dark.png")

        # 2. Click on the "Explore" link and verify the page
        explore_link = page.get_by_role("link", name="Explore")
        explore_link.click()
        expect(page.get_by_role("heading", name="Explore")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/02_explore_page.png")

        # 3. Click on the "Notifications" link and verify the page
        notifications_link = page.get_by_role("link", name="Notifications")
        notifications_link.click()
        expect(page.get_by_role("heading", name="Notifications")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/03_notifications_page.png")

        # 4. Click on the "Messages" link and verify the page
        messages_link = page.get_by_role("link", name="Messages")
        messages_link.click()
        expect(page.get_by_role("heading", name="Messages")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/04_messages_page.png")

        # 5. Click on the "Bookmarks" link and verify the page
        bookmarks_link = page.get_by_role("link", name="Bookmarks")
        bookmarks_link.click()
        expect(page.get_by_role("heading", name="Bookmarks")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/05_bookmarks_page.png")

        # 6. Click on the "Communities" link and verify the page
        communities_link = page.get_by_role("link", name="Communities")
        communities_link.click()
        expect(page.get_by_role("heading", name="Communities")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/06_communities_page.png")

        # 7. Click on the "Profile" link and verify the page
        profile_link = page.get_by_role("link", name="Profile")
        profile_link.click()
        expect(page.get_by_role("heading", name="Profile")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/07_profile_page.png")

        browser.close()

if __name__ == "__main__":
    run_verification()
