package testframework;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;

public class TestBase {

    protected WebDriver driver;
    protected Given given;
    protected When when;
    protected Then then;

    public TestBase() {
    }

    @Before
    public void setup() throws MalformedURLException {
        String appUrlRoot = "localhost:3000";
        URL remoteDriverUrl = new URL("http://localhost:9515");
        driver = new RemoteWebDriver(remoteDriverUrl, DesiredCapabilities.chrome());
        WebDriverWait wait = new WebDriverWait(driver, 2);
        given = new Given(driver, appUrlRoot);
        when = new When(driver, wait);
        then = new Then(driver, wait);
    }

    @After
    public void teardown() {
        driver.close();
    }
}
