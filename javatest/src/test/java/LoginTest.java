import org.junit.Test;
import testframework.TestBase;

public class LoginTest extends TestBase {
    @Test
    public void loginAsDemoUser() {
        givenUser.onHomePage();
        whenUser.clickLoginLinkTopRight();
        whenUser.clickSignInAsGuestUser();
        thenUser.usernameDisplayedInTopRightIs("demo");
    }

    @Test
    public void logoutAsDemoUser() {
        givenUser.loggedInAsDemoUser();
        whenUser.clickLogoutLink();
        thenUser.amLoggedOut();
    }
}
