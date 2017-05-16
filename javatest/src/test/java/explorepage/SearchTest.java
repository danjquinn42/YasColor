package explorepage;

import org.junit.Test;
import testframework.TestBase;

public class SearchTest extends TestBase {

    @Test
    public void searchFiltersItems() {
        givenUser.onExplorePage();
        whenUser.enterSearchKeys("Mich");
        thenUser.noElementContainingText("Megasonic");
    }

    @Test
    public void searchFilterKeepsAppropriateItems() {
        givenUser.onExplorePage();
        whenUser.enterSearchKeys("Mich");
        thenUser.thereIsAnElementContainingText("Fall in Michigan");
    }
}
