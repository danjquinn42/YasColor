package explorepage;

import org.junit.Test;
import testframework.TestBase;

public class SearchTest extends TestBase {

    @Test
    public void searchFiltersItems() {
        given.onExplorePage();
        when.enterSearchKeys("Mich");
        then.noElementContainingText("Megasonic");
    }

    @Test
    public void searchFilterKeepsAppropriateItems() {
        given.onExplorePage();
        when.enterSearchKeys("Mich");
        then.thereIsAnElementContainingText("Fall in Michigan");
    }
}
