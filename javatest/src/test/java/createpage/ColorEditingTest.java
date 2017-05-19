package createpage;

import org.junit.Ignore;
import org.junit.Test;
import testframework.TestBase;

import static com.google.common.truth.Truth.assertThat;
import static org.junit.Assert.assertTrue;

public class ColorEditingTest extends TestBase {
    @Test
    public void pageLoadsWithDefaultColor() {
        givenUser.navigatedToCreatePage();
        thenUser.seesDefaultColor();
    }

    @Test
    public void draggingHueSliderChangesColor() {
        givenUser.navigatedToCreatePage();
        whenUser.movesHueSlider(1);
        thenUser.seesColorIsNotDefault(1);
    }

    @Test
    public void draggingSaturationSliderChangesColor() {
        givenUser.navigatedToCreatePage();
        whenUser.movesFirstSaturationSlider();
        thenUser.seesColorIsNotDefault(1);
    }

    @Test
    public void draggingLightnessSliderChangesColor() {
        givenUser.navigatedToCreatePage();
        whenUser.movesFirstLightnessSlider();
        thenUser.seesColorIsNotDefault(1);
    }

    @Ignore // TODO djquinn
    @Test
    public void draggingMarkerChangesColor() {
        givenUser.navigatedToCreatePage();
        whenUser.movesFirstMarker();
        thenUser.seesColorIsNotDefault(1);
    }
}
