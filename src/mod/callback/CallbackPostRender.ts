import {ModCallback} from "isaac-typescript-definitions";
import {ModUpgraded} from "isaacscript-common";

export function PostRenderInit(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.POST_RENDER, main);
}

function main() {

}
