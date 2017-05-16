package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static testframework.Helpers.*;

public class When {
    private WebDriver driver;
    private WebDriverWait wait;

    public When(final WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public void clickLoginToCreateLink() {
        WebElement loginButton = driver.findElement(By.cssSelector("#content > div.editor > form > input"));
        loginButton.click();
    }

    public void lockColorRelationship() {
        driver.findElement(byInnerText("Lock Color Relationship")).click();
    }

    public void unlockColorRelationship() {
        driver.findElement(byInnerText("Unlock Color Relationship")).click();
    }

    public void enterEmail(final String emailAddress) {
        driver.findElement(By.cssSelector("#email")).sendKeys(emailAddress);
    }

    public void enterPassword(final String password) {
        passwordBox().sendKeys(password);
    }

    private WebElement passwordBox() {
        return driver.findElement(By.cssSelector("#password"));
    }

    public void submitLogin() {
        elementBySelector(driver, "#password").submit();
    }

    public void clickLoginToSaveLink() {
        driver.findElement(byInnerText("Log in to Save")).click();
    }

    public void enterSearchKeys(String keys) {
        String selector = ".search > input";
        WebElement searchBox = driver.findElement(By.cssSelector(selector));
        searchBox.click();
        searchBox.sendKeys(keys);
    }

    // Warning: Better to describe your when condition in a method.
    public void clickElementWithText(String innerText) {
        waitForElement(byInnerText(innerText));
    }

    public void clickEditCopyLink() {
        elementByInnerText(driver, "Edit Copy").click();
    }

    public void clickPallate() {
        driver.findElement(By.cssSelector(".view-theme")).click();
    }

    public void clickLoginLinkTopRight() {
        driver.findElement(By.cssSelector(".login-signup")).click();
    }

    public void clickSignInAsGuestUser() {
        By guestLinkLocator = By.cssSelector(".demo");
        waitToBeClickable(guestLinkLocator);
        driver.findElement(guestLinkLocator).click();
    }

    public void clickLogoutLink() {
        By profileLinkLocator = By.cssSelector(".user-profile-link");
        waitForElement(profileLinkLocator);
        WebElement username = driver.findElement(profileLinkLocator);
        new Actions(driver).moveToElement(username).build().perform();
        waitToBeClickable(byInnerText("log out"));
        elementByInnerText(driver, "log out").click();
    }

    private void waitForElement(By locatorKey) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locatorKey));
    }

    private void waitToBeClickable(By locator) {
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
}
