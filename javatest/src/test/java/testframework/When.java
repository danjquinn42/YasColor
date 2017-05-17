package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static testframework.Helpers.byInnerText;
import static testframework.Helpers.elementBySelector;

public class When extends Subject {

    public When(final WebDriver driver, final WebDriverWait wait) {
        super(driver, wait);
    }

    public void clicksLoginToCreateLink() {
        WebElement loginButton = driver.findElement(By.cssSelector("#content > div.editor > form > input"));
        loginButton.click();
    }

    public void locksColorRelationship() {
        driver.findElement(byInnerText("Lock Color Relationship")).click();
    }

    public void unlocksColorRelationship() {
        driver.findElement(byInnerText("Unlock Color Relationship")).click();
    }

    public void entersEmail(final String emailAddress) {
        driver.findElement(By.cssSelector("#email")).sendKeys(emailAddress);
    }

    public void entersPassword(final String password) {
        passwordBox().sendKeys(password);
    }

    private WebElement passwordBox() {
        return driver.findElement(By.cssSelector("#password"));
    }

    public void submitsLogin() {
        elementBySelector(driver, "#password").submit();
    }

    public void clicksLoginToSaveLink() {
        clickAfterWait(byInnerText("Log in to Save"));
    }

    public void entersSearchKeys(String keys) {
        By searchInputSelector = By.cssSelector(".search > input");
        clickAfterWait(searchInputSelector);
        driver.findElement(searchInputSelector).sendKeys(keys);
    }

    // Warning: Better to describe your whenUser condition in a method.
    public void clickElementWithText(String innerText) {
        waitForElement(byInnerText(innerText));
    }

    public void clicksEditCopyLink() {
        clickAfterWait(byInnerText("Edit Copy"));
    }

    public void clicksTheme() {
        clickAfterWait(By.cssSelector(".view-theme"));
    }

    public void clicksLoginLinkTopRight() {
        driver.findElement(By.cssSelector(".login-signup")).click();
    }

    public void clickSignInAsGuestUser() {
        By guestLinkLocator = By.cssSelector(".demo");
        clickAfterWait(guestLinkLocator);
    }

    private void clickAfterWait(By guestLinkLocator) {
        waitToBeClickable(guestLinkLocator);
        driver.findElement(guestLinkLocator).click();
    }

    public void clicksLogoutLink() {
        By profileLinkLocator = By.cssSelector(".user-profile-link");
        waitForElement(profileLinkLocator);
        WebElement username = driver.findElement(profileLinkLocator);
        new Actions(driver).moveToElement(username).build().perform();
        clickAfterWait(byInnerText("log out"));
    }

    public void movesFirstHueSlider() {
        By firstHueSelector = By.xpath("//*[@id='hue']");
        waitForElement(firstHueSelector);
        WebElement firstSlider = driver.findElement(firstHueSelector);
        new Actions(driver).dragAndDropBy(firstSlider, -30, 0)
                .build()
                .perform();
    }

    public void movesFirstSaturationSlider() {
        By firstSaturationSlider = By.xpath("//*[@id='saturation']");
        waitForElement(firstSaturationSlider);
        WebElement firstSlider = driver.findElement(firstSaturationSlider);
        new Actions(driver).dragAndDropBy(firstSlider, -30, 0)
                .build()
                .perform();
    }

    public void movesFirstLightnessSlider() {
        By firstLightnessSlider = By.xpath("//*[@id='lightness']");
        waitForElement(firstLightnessSlider);
        WebElement firstSlider = driver.findElement(firstLightnessSlider);
        new Actions(driver).dragAndDropBy(firstSlider, -30, 0)
                .build()
                .perform();
    }
}
