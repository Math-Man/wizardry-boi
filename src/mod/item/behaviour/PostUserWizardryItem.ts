import {ActivateWizardryItemCasting, DeactivateWizardryItemCasting} from "./WizardryItemActivationState";
import {WizardrySetCastTimer} from "./WizardryCastTimer";
import {RechargeWizardryItem} from "./RechargeWizardryItem";

export function PostUserWizardryItem(player: EntityPlayer): void {
    ActivateWizardryItemCasting(player)

    WizardrySetCastTimer(player, 4, () => {
        DeactivateWizardryItemCasting(player);
        RechargeWizardryItem(player)
    });

}