package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import static com.google.common.truth.Truth.assertThat;
import static org.junit.Assert.assertTrue;
import static testframework.Helpers.*;

public class ThenUser extends Subject {

    public ThenUser(final WebDriver driver, WebDriverWait wait) {
        super(driver, wait);
    }

    public void seesEmailInput() {
        assertTrue(driver.findElement(By.cssSelector("#email")).isDisplayed());
    }

    public void seesUnlockColorRelationshipButton() {
        assertElementPresent(driver, byInnerText("Unlock Color Relationship"));
    }

    public void seesLockColorRelationshipButton() {
        assertElementPresent(driver, byInnerText("Lock Color Relationship"));
    }

    private void assertElementPresentAfterWait(By locatorKey) {
        waitForElement(locatorKey);
        assertElementPresent(driver, locatorKey);
    }

    public void seesEmailPasswordCombinationInvalidMessage() {
        waitForElement(By.cssSelector(".error"));
        assertElementPresent(driver, byInnerText("Email and password do not match"));
    }

    public void doesNotSeeText(String innerText) {
        assertElementNotPresent(driver, byInnerText(innerText));
    }

    public void seesText(String innerText) {
        By locatorKey = byInnerText(innerText);
        assertElementPresentAfterWait(locatorKey);
    }

    public void seesLoginForm() {
        assertElementPresentAfterWait(By.cssSelector(".modal.visible > section > form.session-form-box"));
    }

    public void isOnCreatePage() {
        assertThat(driver.getCurrentUrl()).contains("create");
    }

    public void seesThemeFullscreen() {
        assertElementPresentAfterWait(By.cssSelector(".view-theme.fullscreen"));
    }

    public void seesThemeNotFullscreen() {
        assertElementNotPresent(driver, By.cssSelector(".fullscreen"));
    }

    public void seesColorTags() {
        By tagSelector = By.cssSelector("#tagbox > .tag");
        assertElementPresentAfterWait(tagSelector);
    }

    public void seesUsernameDisplayedInTopRightIs(String username) {
        assertElementPresentAfterWait(By.cssSelector(".user-profile-link > h2"));
        // TODO not right, we need the username to be the same element not just any element:
        assertElementPresentAfterWait(byInnerText(username));
    }

    public void isLoggedOut() {
        By locator = By.cssSelector(".login-signup");
        assertElementPresentAfterWait(locator);
        assertElementNotPresent(driver, By.cssSelector(".user-profile-link"));
    }

    public void seesFirstColorIsNotDefault() {
        By firstColorSelector = By.xpath("//*[@id=\"content\"]/div[2]/ul/li[1]");
        waitForElement(firstColorSelector);
        WebElement firstColor = driver.findElement(firstColorSelector);
        String color = firstColor.getCssValue("background-color");
        assertThat(color).doesNotContain("rgba(170, 39, 65, 1)");
    }

    public void seesDefaultColor() {
        By firstColorSelector = By.xpath("//*[@id=\"content\"]/div[2]/ul/li[1]");
        waitForElement(firstColorSelector);
        WebElement firstColor = driver.findElement(firstColorSelector);
        String color = firstColor.getCssValue("background-color");
        assertThat(color).isEqualTo("rgba(170, 39, 65, 1)");
    }
}
