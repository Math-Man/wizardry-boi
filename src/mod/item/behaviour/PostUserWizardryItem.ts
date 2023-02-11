import {ActivateWizardryItem, DeactivateWizardryItem} from "./WizardryItemActivationState";
import {WizardrySetCastTimer} from "./WizardryCastTimer";
import {RechargeWizardryItem} from "./RechargeWizardryItem";

export function PostUserWizardryItem(player: EntityPlayer): void {
    ActivateWizardryItem(player)

    WizardrySetCastTimer(player, 4, () => {
        DeactivateWizardryItem(player);
        RechargeWizardryItem(player)
    });

}