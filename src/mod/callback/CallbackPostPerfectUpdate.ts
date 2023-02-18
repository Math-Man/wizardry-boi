import {ModCallback} from "isaac-typescript-definitions";
import {PlayerHasWizardryItem, SpawnItemFirstFrame} from "../helper/ItemHelper";
import {game, getPlayers, ModUpgraded} from "isaacscript-common";
import {GetWizardryStateData} from "../item/data/WizardryStateDataCache";

export function PostPerfectUpdateInit(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.POST_PEFFECT_UPDATE, main);
}

function main() {
    SpawnItemFirstFrame();

    // TODO: Move to a method.
    const realPlayers = getPlayers();
    for (const player of realPlayers) {
        if (!PlayerHasWizardryItem(player)) {
            continue;
        }
        const state = GetWizardryStateData(player);
        const currentSpell = state.getActiveSpell()
        if (currentSpell) {
            game.GetHUD().ShowItemText(currentSpell.getFlavorTextTitle(), currentSpell.getFlavorTextDescription(), true);
            state.runeHandler.setShouldDisplaySpellText(false)
        }
    }
}
