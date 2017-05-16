package explorepage;

import org.junit.Test;
import testframework.TestBase;

public class SelectElementsTest extends TestBase {

    @Test
    public void clickOnBasquiat() {
        givenUser.onExplorePage();
        givenUser.searchedExplorePageFor("Mich");
        whenUser.clickElementWithText("Basquiat");
    }

}
