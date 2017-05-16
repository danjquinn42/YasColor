package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static com.google.common.truth.Truth.assertThat;
import static org.junit.Assert.assertTrue;
import static testframework.Helpers.*;

public class Then {
    private final WebDriver driver;
    private final WebDriverWait wait;

    public Then(final WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait = wait;
    }

    public void emailInputIsDisplayed() {
        assertTrue(driver.findElement(By.cssSelector("#email")).isDisplayed());
    }

    public void seeUnlockColorRelationshipButton() {
        assertElementPresent(driver, byInnerText("Unlock Color Relationship"));
    }

    public void seeLockColorRelationshipButton() {
        assertElementPresent(driver, byInnerText("Lock Color Relationship"));
    }

    private void waitForElement(By locatorKey) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locatorKey));
    }

    private void assertElementPresentAfterWait(By locatorKey) {
        waitForElement(locatorKey);
        assertElementPresent(driver, locatorKey);
    }

    public void seeEmailPasswordCombinationInvalidMessage() {
        waitForElement(By.cssSelector(".error"));
        assertElementPresent(driver, byInnerText("Email and password do not match"));
    }

    public void noElementContainingText(String innerText) {
        assertElementNotPresent(driver, byInnerText(innerText));
    }

    public void thereIsAnElementContainingText(String innerText) {
        By locatorKey = byInnerText(innerText);
        assertElementPresentAfterWait(locatorKey);
    }

    public void seeLoginForm() {
        assertElementPresentAfterWait(By.cssSelector(".modal.visible > section > form.session-form-box"));
    }

    public void onCreatePage() {
        assertThat(driver.getCurrentUrl()).contains("create");
    }

    public void pallateIsFullscreen() {
        By locatorKey = By.cssSelector(".view-theme.fullscreen");
        assertElementPresentAfterWait(locatorKey);
    }

    public void pallateIsNotFullscreen() {
        assertElementNotPresent(driver, By.cssSelector(".fullscreen"));
    }

    public void seeColorTags() {
        assertElementPresent(driver, By.cssSelector("#tagbox > .tag"));
    }

    public void usernameDisplayedInTopRightIs(String username) {
        assertElementPresentAfterWait(By.cssSelector(".user-profile-link > h2"));
        // TODO not right, we need the username to be the same element not just any element:
        assertElementPresentAfterWait(byInnerText(username));
    }

    public void amLoggedOut() {
        By locator = By.cssSelector(".login-signup");
        assertElementPresentAfterWait(locator);
        assertElementNotPresent(driver, By.cssSelector(".user-profile-link"));
    }
}
