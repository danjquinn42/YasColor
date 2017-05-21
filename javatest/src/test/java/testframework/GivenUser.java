package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GivenUser extends Subject {

    private final String urlRoot;

    public GivenUser(final WebDriver driver, final WebDriverWait wait, final String urlRoot) {
        super(driver, wait);
        this.urlRoot = urlRoot;
    }

    public void navigatedToCreatePage() {
        getPage("/#/create/");
    }

    private void getPage(String pathExtension) {
        driver.get(urlRoot + pathExtension);
    }

    private void clickLoginToCreateLink() {
        WebElement loginButton = driver.findElement(By.cssSelector("#content > div.editor > form > input"));
        loginButton.click();
    }

    private void clickCreateThemeLink() {
        waitToBeClickable(By.xpath("//*[@id='content']/div[1]/form/input"));
    }

    public void isOnLoginPopoverOnCreatePage() {
        navigatedToCreatePage();
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

    public void isOnExplorePage() {
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

    public void isLoggedInAsDemoUser() {
        onHomePage();
        clickLoginLinkTopRight();
        clickSignInAsGuestUser();
    }

    public void hasCreatedATheme() {
        isLoggedInAsDemoUser();
        clickCreateThemeLink();
    }

    private void clickLoginLinkTopRight() {
        driver.findElement(By.cssSelector(".login-signup")).click();
    }

    private void clickSignInAsGuestUser() {
        driver.findElement(By.cssSelector(".demo")).click();
    }
}
