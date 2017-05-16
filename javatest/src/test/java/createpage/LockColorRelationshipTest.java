package createpage;

import org.junit.Test;
import testframework.TestBase;

public class LockColorRelationshipTest extends TestBase {

    @Test
    public void lockColorRelationshipTogglesToUnlock() {
        givenUser.onCreatePage();
        whenUser.lockColorRelationship();
        thenUser.seeUnlockColorRelationshipButton();
    }

    @Test
    public void unlockColorRelationshipTogglesBackToLock() {
        givenUser.onCreatePage();
        whenUser.lockColorRelationship();
        whenUser.unlockColorRelationship();
        thenUser.seeLockColorRelationshipButton();
    }
}
