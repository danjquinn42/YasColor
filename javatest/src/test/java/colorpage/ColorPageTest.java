package colorpage;

import org.junit.Test;
import testframework.TestBase;

public class ColorPageTest extends TestBase {
    @Test
    public void canLogin() {
        givenUser.isOnColorPage();
        whenUser.clicksLoginToSaveLink();
        thenUser.seesLoginForm();
    }

    @Test
    public void editCopyGoesToCreatePage() {
        givenUser.isOnColorPage();
        whenUser.clicksEditCopyLink();
        thenUser.isOnCreatePage();
    }

    @Test
    public void shouldMakeColorFullscreen() {
        givenUser.isOnColorPage();
        whenUser.clicksTheme();
        thenUser.seesThemeFullscreen();
    }

    @Test
    public void shouldExitFullscreenOnClick() {
        givenUser.viewsThemeFullscreen();
        whenUser.clicksTheme();
        thenUser.seesThemeNotFullscreen();
    }

    @Test
    public void seeTags() {
        givenUser.isOnColorPage();
        thenUser.seesColorTags();
    }
}
