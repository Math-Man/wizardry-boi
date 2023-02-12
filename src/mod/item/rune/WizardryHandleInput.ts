import {getPlayers, isActionTriggered, isShootActionTriggered} from "isaacscript-common";
import {PlayerHasWizardryItem} from "../../helper/ItemHelper";
import {ButtonAction} from "isaac-typescript-definitions";
import {GetWizardryStateData} from "../data/WizardryStateDataCache";
import {RuneSlot} from "./RuneSlot";

export function wizardryHandleInput() : void {
    const realPlayers = getPlayers();
    for (const player of realPlayers) {
        if (PlayerHasWizardryItem(player)) {
            const playerStateData = GetWizardryStateData(player);
            const activeSpell = playerStateData.getActiveSpell();

            if(isShootActionTriggered(player.ControllerIndex) && activeSpell !== undefined) {
                playerStateData.castActiveSpell([]);
                playerStateData.DeactivateCasting();
                return;
            }

            if(playerStateData.castingSpell) {
                if(isActionTriggered(player.ControllerIndex, ButtonAction.SHOOT_DOWN)) {
                    playerStateData.runeHandler.CastRune(RuneSlot.DOWN);
                } else if (isActionTriggered(player.ControllerIndex, ButtonAction.SHOOT_LEFT)) {
                    playerStateData.runeHandler.CastRune(RuneSlot.LEFT);
                }  else if (isActionTriggered(player.ControllerIndex, ButtonAction.SHOOT_UP)) {
                    playerStateData.runeHandler.CastRune(RuneSlot.UP);
                }  else if (isActionTriggered(player.ControllerIndex, ButtonAction.SHOOT_RIGHT)) {
                    playerStateData.runeHandler.CastRune(RuneSlot.RIGHT);
                }
            }
        }
    }
}