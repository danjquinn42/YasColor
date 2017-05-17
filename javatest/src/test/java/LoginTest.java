import org.junit.Test;
import testframework.TestBase;

public class LoginTest extends TestBase {
    @Test
    public void loginAsDemoUser() {
        givenUser.onHomePage();
        whenUser.clicksLoginLinkTopRight();
        whenUser.clickSignInAsGuestUser();
        thenUser.seesUsernameDisplayedInTopRightIs("demo");
    }

    @Test
    public void logoutAsDemoUser() {
        givenUser.isLoggedInAsDemoUser();
        whenUser.clicksLogoutLink();
        thenUser.isLoggedOut();
    }
}
