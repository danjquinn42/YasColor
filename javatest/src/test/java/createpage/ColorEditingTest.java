package createpage;

import org.junit.Test;
import testframework.TestBase;

public class ColorEditingTest extends TestBase{
    @Test
    public void draggingHueSliderChangesHue(){
        givenUser.navigatedToCreatePage();
        whenUser.movesFirstHueSlider();
        thenUser.seesFirstColorIsNotDefault();
    }
}
