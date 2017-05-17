package explorepage;

import org.junit.Test;
import testframework.TestBase;

public class SearchTest extends TestBase {

    @Test
    public void searchFiltersItems() {
        givenUser.isOnExplorePage();
        whenUser.entersSearchKeys("Mich");
        thenUser.doesNotSeeText("Megasonic");
    }

    @Test
    public void searchFilterKeepsAppropriateItems() {
        givenUser.isOnExplorePage();
        whenUser.entersSearchKeys("Mich");
        thenUser.seesText("Fall in Michigan");
    }
}
