import {ModCallback} from "isaac-typescript-definitions";
import {ModUpgraded} from "isaacscript-common";
import {FlushAndClearAllStateData} from "../item/data/WizardryStateDataCache";

export function PostNewLevelInit(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.POST_NEW_LEVEL, main);
}

function main() {
    FlushAndClearAllStateData();
}
