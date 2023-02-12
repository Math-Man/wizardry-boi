import {CreateCompletableFuture} from "../../helper/CompletableFuture";
import {RechargeWizardryItem} from "./RechargeWizardryItem";
import {FlushPlayerStateData, GetWizardryStateData} from "../data/WizardryStateDataCache";
import {logError, newChargeBarSprites, renderChargeBar} from "isaacscript-common";
import {Flog} from "../../helper/CustomLogger";

export function PostUseWizardryItem(player: EntityPlayer, rng: RNG): void {
    const state = GetWizardryStateData(player);
    state.ActivateCasting(rng);


    // charge bar tests


    const futureKey = state.getLastCompletableFutureKey();
    CreateCompletableFuture(4000, futureKey,() => {
        resetPlayerState(player, futureKey);
    }, () => {
        cancelPlayerState(player, futureKey);
    });

}


function resetPlayerState(player: EntityPlayer, key: unknown) : void {
    const state = GetWizardryStateData(player);
    if(state !== undefined) {
        if(state.getActiveSpell() !== undefined) {
            return;
        }

        if(state.DeactivateCasting()) {
            FlushPlayerStateData(player);
            return;
        }
        RechargeWizardryItem(player)
    } else {
        logError(`Player's wizardry state gone missing during casting period.`)
    }
}

function cancelPlayerState(player: EntityPlayer, key: unknown) : void {
    Flog(`Canceled player state flush. ${key}`);
}