package createpage;

import org.junit.Test;
import testframework.TestBase;

public class ColorEditingTest extends TestBase{
    @Test
    public void pageLoadsWithDefaultColor(){
        givenUser.navigatedToCreatePage();
        thenUser.seesDefaultColor();
    }

    @Test
    public void draggingHueSliderChangesColor(){
        givenUser.navigatedToCreatePage();
        whenUser.movesFirstHueSlider();
        thenUser.seesFirstColorIsNotDefault();
    }

    @Test
    public void draggingSaturationSliderChangesColor(){
        givenUser.navigatedToCreatePage();
        whenUser.movesFirstSaturationSlider();
        thenUser.seesFirstColorIsNotDefault();
    }

    @Test
    public void draggingLightnessSliderChangesColor(){
        givenUser.navigatedToCreatePage();
        whenUser.movesFirstLightnessSlider();
        thenUser.seesFirstColorIsNotDefault();
    }
}
