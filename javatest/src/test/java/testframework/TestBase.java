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
    protected GivenUser givenUser;
    protected WhenUser whenUser;
    protected ThenUser thenUser;

    public TestBase() {
    }

    @Before
    public void setup() throws MalformedURLException {
        String appUrlRoot = "localhost:3000";
        URL remoteDriverUrl = new URL("http://localhost:9515");
        driver = new RemoteWebDriver(remoteDriverUrl, DesiredCapabilities.chrome());
        WebDriverWait wait = new WebDriverWait(driver, 2);
        givenUser = new GivenUser(driver, wait, appUrlRoot);
        whenUser = new WhenUser(driver, wait);
        thenUser = new ThenUser(driver, wait);
    }

    @After
    public void teardown() {
        driver.close();
    }
}
