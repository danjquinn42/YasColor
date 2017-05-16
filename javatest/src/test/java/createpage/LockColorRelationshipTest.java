package createpage;

import org.junit.Test;
import testframework.TestBase;

public class LockColorRelationshipTest extends TestBase {

    @Test
    public void lockColorRelationshipTogglesToUnlock() {
        given.onCreatePage();
        when.lockColorRelationship();
        then.seeUnlockColorRelationshipButton();
    }

    @Test
    public void unlockColorRelationshipTogglesBackToLock() {
        given.onCreatePage();
        when.lockColorRelationship();
        when.unlockColorRelationship();
        then.seeLockColorRelationshipButton();
    }
}
