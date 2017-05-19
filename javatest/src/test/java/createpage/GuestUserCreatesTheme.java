package createpage;

import org.junit.Ignore;
import org.junit.Test;
import testframework.TestBase;

public class GuestUserCreatesTheme extends TestBase{

    @Test
    public void demoUserCanCreateTheme() {
        givenUser.isLoggedInAsDemoUser();
        givenUser.navigatedToCreatePage();
        whenUser.clicksCreateThemeButton();
    }


    @Ignore("Not implemented")
    @Test
    public void guestUserThemeSearchable() {
        //todo
    }
}
