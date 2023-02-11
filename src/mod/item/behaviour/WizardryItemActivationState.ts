import {FlushPlayerStateData, GetWizardryStateData} from "../data/WizardryStateDataCache";
import {Flog} from "../../helper/CustomLogger";
import {DisableArrowKeys, EnableAllKeys} from "../../helper/ItemHelper";

export function ActivateWizardryItem(player: EntityPlayer) : void {
    const stateData = GetWizardryStateData(player);
    stateData.active = true;
    DisableArrowKeys(player)
    Flog(`Activated item from wizardry!`);
}

export function DeactivateWizardryItem(player: EntityPlayer): void {
    if(!player) {
        FlushPlayerStateData(player);
        return;
    }
    const stateData = GetWizardryStateData(player);
    stateData.active = false;
    EnableAllKeys(player)
    Flog(`Deactivated item from wizardry!`);
}