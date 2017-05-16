package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Given {

    private final WebDriver driver;
    private final String urlRoot;

    public Given(final WebDriver driver, String urlRoot) {
        this.driver = driver;
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

    public void onColorPage() {
        getPage("/?#/theme/125");
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

    public void colorPagePallateIsFullscreen() {
        onColorPage();
        driver.findElement(By.cssSelector(".view-theme")).click();
    }

    public void onHomePage() {
        getPage("/");
    }

    public void loggedInAsDemoUser() {
        onHomePage();
        clickLoginLinkTopRight();
        clickSignInAsGuestUser();
    }

    private void clickLoginLinkTopRight() {
        driver.findElement(By.cssSelector(".login-signup")).click();
    }

    private void clickSignInAsGuestUser() {
        driver.findElement(By.cssSelector(".demo")).click();
    }
}
