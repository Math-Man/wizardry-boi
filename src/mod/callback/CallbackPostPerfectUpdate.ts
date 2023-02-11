import {ModCallback} from "isaac-typescript-definitions";
import {SpawnItemFirstFrame} from "../helper/ItemHelper";
import {ModUpgraded} from "isaacscript-common";

export function PostPerfectUpdateInit(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.POST_PEFFECT_UPDATE, main);
}

function main() {
    SpawnItemFirstFrame();
}
