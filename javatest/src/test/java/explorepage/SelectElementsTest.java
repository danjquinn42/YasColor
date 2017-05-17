package explorepage;

import org.junit.Test;
import testframework.TestBase;

public class SelectElementsTest extends TestBase {

    @Test
    public void clickOnBasquiat() {
        givenUser.isOnExplorePage();
        givenUser.searchedExplorePageFor("Mich");
        whenUser.clickElementWithText("Basquiat");
    }

}
