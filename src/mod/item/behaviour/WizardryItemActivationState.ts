import {FlushPlayerStateData, GetWizardryStateData} from "../data/WizardryStateDataCache";
import {Flog} from "../../helper/CustomLogger";
import {DisableArrowKeys, EnableAllKeys} from "../../helper/ItemHelper";
import {RuneSlot} from "../spells/RuneSlot";

export function ActivateWizardryItemCasting(player: EntityPlayer) : void {
    const stateData = GetWizardryStateData(player);
    stateData.castingSpell = true;
    DisableArrowKeys(player)
    Flog(`Started Casting spell!`);
}

export function DeactivateWizardryItemCasting(player: EntityPlayer): void {
    // Player is gone?
    if(!player) {
        FlushPlayerStateData(player);
        return;
    }
    const stateData = GetWizardryStateData(player);
    stateData.castingSpell = false;
    const runes = stateData.runeHandler.flushCurrentlyCastRunes();
    EnableAllKeys(player)
    Flog(`Stopped casting spell! [${runes.map(value => RuneSlot[value]).join(",")}]`);
}