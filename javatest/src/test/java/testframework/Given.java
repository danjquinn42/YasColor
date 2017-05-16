package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Given {

    private final WebDriver driver;
    private final WebDriverWait wait;
    private final String urlRoot;

    public Given(final WebDriver driver, final WebDriverWait wait, final String urlRoot) {
        this.driver = driver;
        this.wait = wait;
        this.urlRoot = urlRoot;
    }

    public void onCreatePage() {
        getPage("/#/create/");
    }

    private void getPage(String pathExtension) {
        driver.get(urlRoot + pathExtension);
    }

    private void clickLoginToCreateLink() {
        WebElement loginButton = driver.findElement(By.cssSelector("#content > div.editor > form > input"));
        loginButton.click();
    }

    public void inLoginPopoverOnCreatePage() {
        onCreatePage();
        clickLoginToCreateLink();
        // TODO(b/123) Should only have to click here once
        clickLoginToCreateLink();
    }

    public void isOnColorPage() {
        getPage("/#/explore");
        By xpathSelector = By.xpath("//main/ul/div[1]/section/a");
        waitForElement(xpathSelector);
        driver.findElement(xpathSelector).click();
    }

    public void onExplorePage() {
        getPage("/#/explore");
    }

    public void searchedExplorePageFor(String query) {
        String selector = ".search > input";
        WebElement searchBox = driver.findElement(By.cssSelector(selector));
        searchBox.click();
        searchBox.sendKeys("Mich");

    }

    public void viewsThemeFullscreen() {
        isOnColorPage();
        By cssSelector = By.cssSelector(".view-theme");
        waitForElement(cssSelector);
        driver.findElement(cssSelector).click();
    }

    public void onHomePage() {
        getPage("/");
    }

    public void loggedInAsDemoUser() {
        onHomePage();
        clickLoginLinkTopRight();
        clickSignInAsGuestUser();
    }

    private void waitForElement(By locatorKey) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locatorKey));
    }

    private void clickLoginLinkTopRight() {
        driver.findElement(By.cssSelector(".login-signup")).click();
    }

    private void clickSignInAsGuestUser() {
        driver.findElement(By.cssSelector(".demo")).click();
    }
}
