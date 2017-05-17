package createpage;

import org.junit.Test;
import testframework.TestBase;

public class LockColorRelationshipTest extends TestBase {

    @Test
    public void lockColorRelationshipTogglesToUnlock() {
        givenUser.isOnCreatePage();
        whenUser.locksColorRelationship();
        thenUser.seesUnlockColorRelationshipButton();
    }

    @Test
    public void unlockColorRelationshipTogglesBackToLock() {
        givenUser.isOnCreatePage();
        whenUser.locksColorRelationship();
        whenUser.unlocksColorRelationship();
        thenUser.seesLockColorRelationshipButton();
    }
}
