package createpage;

import org.junit.Ignore;
import org.junit.Test;
import testframework.TestBase;

public class LoginToCreateTest extends TestBase {

    @Ignore // FAILING! TODO(djquinn)
    @Test
    public void canLoginUsingLogInToCreateButton() {
        givenUser.navigatedToCreatePage();
        whenUser.clicksLoginToCreateLink();
        thenUser.seesEmailInput(); // fails because popover disappears on first visit
    }

    @Test
    public void emailPasswordCombinationInvalid() {
        givenUser.isOnLoginPopoverOnCreatePage();
        whenUser.entersEmail("dan@yascolor.com");
        whenUser.entersPassword("testpassword");
        whenUser.submitsLogin();
        thenUser.seesEmailPasswordCombinationInvalidMessage();
    }
}
