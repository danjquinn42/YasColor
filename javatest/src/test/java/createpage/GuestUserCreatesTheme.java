package createpage;

import org.junit.Ignore;
import org.junit.Test;
import testframework.TestBase;

import java.util.UUID;

public class GuestUserCreatesTheme extends TestBase {

    @Test
    public void creatingThemeRedirectsToThemeView() {
        givenUser.isLoggedInAsDemoUser();
        givenUser.navigatedToCreatePage();
        whenUser.clicksCreateThemeButton();
        thenUser.seesThemeViewPage();
    }

    @Test
    public void userCanAddTagsToNewTheme() {
        String tagText = UUID.randomUUID().toString();
//        givenUser.hasCreatedATheme();
        givenUser.isLoggedInAsDemoUser();
        givenUser.navigatedToCreatePage();
        whenUser.clicksCreateThemeButton();
        whenUser.addsATag(tagText);
        thenUser.seesTagListed(tagText);
    }

    @Ignore //TODO danquinn
    @Test
    public void userCanAddTitleToNewTheme() {
        String titleText = UUID.randomUUID().toString();
    }

    @Ignore("Not implemented")
    @Test
    public void userCanDeleteTag() {
        String tagText = UUID.randomUUID().toString();
//        givenUser.hasCreatedATheme();
    }

    @Ignore("Not implemented (Requires Refresh)")
    @Test
    public void themeAppearsOnMyThemesPage() {

    }


    @Ignore("Not implemented")
    @Test
    public void guestUserThemeSearchable() {
        //todo
    }
}
