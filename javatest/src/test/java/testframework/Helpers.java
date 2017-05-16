package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertFalse;

public class Helpers {

    public static WebElement elementBySelector(final WebDriver driver, final String selector) {
        return driver.findElement(By.cssSelector(selector));
    }

    public static WebElement elementByInnerText(final WebDriver driver, final String innerText) {
        return driver.findElement(byInnerText(innerText));
    }

    public static By byInnerText(String innerText) {
        return By.xpath("//*[contains(text(),'" + innerText + "')]");
    }

    public static boolean isElementPresent(final WebDriver driver, final By locatorKey) {
        try {
            return driver.findElement(locatorKey).isDisplayed();
        } catch (org.openqa.selenium.NoSuchElementException e) {
            return false;
        }
    }

    public static void assertElementPresent(final WebDriver driver, final By locatorKey) {
        // throws on unfound element
        driver.findElement(locatorKey);
    }


    public static void assertElementNotPresent(final WebDriver driver, final By locatorKey) {
        assertFalse(isElementPresent(driver, locatorKey));
    }

}
