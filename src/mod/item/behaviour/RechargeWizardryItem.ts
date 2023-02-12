import {addCharge} from "isaacscript-common";
import {GetWizardryItemActiveSlot} from "../../helper/ItemHelper";
import {Flog} from "../../helper/CustomLogger";

export function RechargeWizardryItem(player: EntityPlayer): void {
    const slot = GetWizardryItemActiveSlot(player);
    Flog(`RECHARGING ITEM IN SLOT: ${slot}`)
    if(slot >= 0) {
        addCharge(player, slot, 1, true);
    } else {
        Flog(`Tried to charge up wizardry item but it is missing.`)
    }
}