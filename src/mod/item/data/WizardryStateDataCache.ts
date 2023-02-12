import {WizardryStateData} from "./WizardryStateData";
import {WizardrySpellHandler} from "../rune/WizardrySpellHandler";
import {Flog} from "../../helper/CustomLogger";
import {CancelAllCompletableFutures} from "../../helper/CompletableFuture";
import {mod} from "../../../Mod";
import {MOD_FEATURE} from "../../enum/ModConstants";
import {getPlayers} from "isaacscript-common";
import {EnableAllKeys} from "../../helper/ItemHelper";
import {RechargeWizardryItem} from "../behaviour/RechargeWizardryItem";

const stateData = new Map<int, WizardryStateData>();

function GetWizardryStateDataMap(): Map<int, WizardryStateData> {
    return stateData;
}

export function FlushPlayerStateData(player: EntityPlayer): void {
    Flog(`PLAYER STATE DATA IS FLUSHED FOR PLAYER WITH INDEX: ${player.ControllerIndex}`)
    stateData.delete(player.ControllerIndex);
}

export function FlushAllStateData(): void {
    stateData.clear();
}

export function FlushAndClearAllStateData(): void {
    stateData.forEach((value, key) => {
        value.runeHandler.flushCurrentlyCastRunes();
        value.resetState()
    });

    // Revert control modifications and recharge item
    getPlayers().forEach(player => {
        EnableAllKeys(player);
        RechargeWizardryItem(player);
    })

    FlushAllStateData();
    CancelAllCompletableFutures();
}

export function GetWizardryStateData(player: EntityPlayer): WizardryStateData {
    let stateData = GetWizardryStateDataMap().get(player.ControllerIndex);

    // Data doesn't exist, add it.
    if (stateData === undefined) {
        Flog(`RENEWING PLAYER STATE DATA, IT DOESN'T EXIST! ${player.ControllerIndex}`)
        stateData = new WizardryStateData(player, new WizardrySpellHandler(player));
        GetWizardryStateDataMap().set(player.ControllerIndex, stateData)
    }
    return stateData;
}
