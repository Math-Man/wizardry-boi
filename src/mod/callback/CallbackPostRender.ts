import {ModCallback} from "isaac-typescript-definitions";
import {ModUpgraded} from "isaacscript-common";
import {wizardryHandleInput} from "../item/rune/WizardryHandleInput";
import {DrawWizardryRunes} from "../item/behaviour/DrawWizardryRunes";

export function PostRenderInit(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.POST_RENDER, main);
}

function main(): void {
    // TODO: Not sure if handling input on post render is correct...
    wizardryHandleInput();
    DrawWizardryRunes();
}
