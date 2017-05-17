package createpage;

import org.junit.Test;
import testframework.TestBase;

public class LockColorRelationshipTest extends TestBase {

    @Test
    public void lockColorRelationshipTogglesToUnlock() {
        givenUser.navigatedToCreatePage();
        whenUser.locksColorRelationship();
        thenUser.seesUnlockColorRelationshipButton();
    }

    @Test
    public void unlockColorRelationshipTogglesBackToLock() {
        givenUser.navigatedToCreatePage();
        whenUser.locksColorRelationship();
        whenUser.unlocksColorRelationship();
        thenUser.seesLockColorRelationshipButton();
    }
}
