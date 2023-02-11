import {FlushPlayerStateData, GetWizardryStateData} from "../data/WizardryStateDataCache";
import {Flog} from "../../helper/CustomLogger";

export function ActivateWizardryItem(player: EntityPlayer) : void {
    const stateData = GetWizardryStateData(player);
    stateData.active = true;
    Flog(`Activated item from wizardry!`);
}

export function DeactivateWizardryItem(player: EntityPlayer): void {
    if(!player) {
        FlushPlayerStateData(player);
        return;
    }
    const stateData = GetWizardryStateData(player);
    stateData.active = false;
    Flog(`Deactivated item from wizardry!`);
}