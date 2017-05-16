package createpage;

import org.junit.Ignore;
import org.junit.Test;
import testframework.TestBase;

public class LoginToCreateTest extends TestBase {

    @Ignore // FAILING! TODO(b/123)
    @Test
    public void canLoginFromCreatePage() {
        givenUser.onCreatePage();
        whenUser.clickLoginToCreateLink();
        thenUser.emailInputIsDisplayed(); // fails because popover disappears on first visit
    }

    @Test
    public void emailPasswordCombinationInvalid() {
        givenUser.inLoginPopoverOnCreatePage();
        whenUser.enterEmail("dan@yascolor.com");
        whenUser.enterPassword("testpassword");
        whenUser.submitLogin();
        thenUser.seeEmailPasswordCombinationInvalidMessage();
    }
}
