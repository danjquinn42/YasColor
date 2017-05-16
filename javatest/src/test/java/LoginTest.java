import org.junit.Test;
import testframework.TestBase;

public class LoginTest extends TestBase {
    @Test
    public void loginAsDemoUser() {
        given.onHomePage();
        when.clickLoginLinkTopRight();
        when.clickSignInAsGuestUser();
        then.usernameDisplayedInTopRightIs("demo");
    }

    @Test
    public void logoutAsDemoUser() {
        given.loggedInAsDemoUser();
        when.clickLogoutLink();
        then.amLoggedOut();
    }
}
