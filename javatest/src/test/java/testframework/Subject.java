package testframework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Subject {
    protected final WebDriver driver;
    protected final WebDriverWait wait;

    public Subject(final WebDriver driver, WebDriverWait wait) {
        this.driver = driver;
        this.wait = wait;
    }

    protected void waitForElement(By locatorKey) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(locatorKey));
    }

    protected void waitToBeClickable(By locator) {
        wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
}
