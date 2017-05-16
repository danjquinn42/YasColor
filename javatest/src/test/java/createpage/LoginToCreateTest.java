package createpage;

import org.junit.Ignore;
import org.junit.Test;
import testframework.TestBase;

public class LoginToCreateTest extends TestBase {

    @Ignore // FAILING! TODO(b/123)
    @Test
    public void canLoginFromCreatePage() {
        given.onCreatePage();
        when.clickLoginToCreateLink();
        then.emailInputIsDisplayed(); // fails because popover disappears on first visit
    }

    @Test
    public void emailPasswordCombinationInvalid() {
        given.inLoginPopoverOnCreatePage();
        when.enterEmail("dan@yascolor.com");
        when.enterPassword("testpassword");
        when.submitLogin();
        then.seeEmailPasswordCombinationInvalidMessage();
    }
}
