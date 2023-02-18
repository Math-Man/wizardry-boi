import {ModCallback} from "isaac-typescript-definitions";
import {ModUpgraded} from "isaacscript-common";
import {FlushAndClearAllStateData} from "../item/data/WizardryStateDataCache";
import {registerSpellData} from "../item/spells/service/SpellMapper";

export function PostGameStartedInit(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.POST_GAME_STARTED, main);
}

function main() {
    FlushAndClearAllStateData();
    registerSpellData();
}
