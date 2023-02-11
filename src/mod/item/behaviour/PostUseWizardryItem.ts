import {WizardrySetCastTimer} from "./WizardryCastTimer";
import {RechargeWizardryItem} from "./RechargeWizardryItem";
import {FlushPlayerStateData, GetWizardryStateData} from "../data/WizardryStateDataCache";
import {logError} from "isaacscript-common";

export function PostUseWizardryItem(player: EntityPlayer): void {
    GetWizardryStateData(player).ActivateCasting();

    WizardrySetCastTimer(player, 4, () => {
        const state = GetWizardryStateData(player);
        if(state) {
            if(state.DeactivateCasting()) {
                FlushPlayerStateData(player);
                return;
            }
            RechargeWizardryItem(player)
        } else {
            logError(`Player's wizardry state gone missing during casting period.`)
        }
    });

}