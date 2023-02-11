import {WizardryStateData} from "./WizardryStateData";
import {WizardryRuneHandler} from "../rune/WizardryRuneHandler";

const stateData = new Map<int, WizardryStateData>();

function GetWizardryStateDataMap(): Map<int, WizardryStateData> {
    return stateData;
}

export function FlushPlayerStateData(player: EntityPlayer): void {
    stateData.delete(player.Index);
}

export function FlushAllStateData(): void {
    stateData.clear();
}

export function GetWizardryStateData(player: EntityPlayer): WizardryStateData {
    let stateData = GetWizardryStateDataMap().get(player.Index);

    // Data doesn't exist, add it.
    if (stateData === undefined) {
        stateData = new WizardryStateData(new WizardryRuneHandler(player));
        GetWizardryStateDataMap().set(player.Index, stateData)
    }
    return stateData;
}
