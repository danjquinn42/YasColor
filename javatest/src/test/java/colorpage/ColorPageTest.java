package colorpage;

import org.junit.Test;
import testframework.TestBase;

public class ColorPageTest extends TestBase {
    @Test
    public void canLogin() {
        given.onColorPage();
        when.clickLoginToSaveLink();
        then.seeLoginForm();
    }

    @Test
    public void editCopyGoesToCreatePage() {
        given.onColorPage();
        when.clickEditCopyLink();
        then.onCreatePage();
    }

    @Test
    public void shouldMakeColorFullscreen() {
        given.onColorPage();
        when.clickPallate();
        then.pallateIsFullscreen();
    }

    @Test
    public void shouldExitFullscreenOnClick() {
        given.colorPagePallateIsFullscreen();
        when.clickPallate();
        then.pallateIsNotFullscreen();
    }

    @Test
    public void seeTags() {
        given.onColorPage();
        then.seeColorTags();
    }
}
