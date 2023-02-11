import {Flog} from "./CustomLogger";
import {game, getActiveItemSlot} from "isaacscript-common";
import {CollectibleTypeCustom} from "../enum/CustomItems";
import {EntityType, PickupVariant} from "isaac-typescript-definitions";
import {DisableInputs} from "isaacscript-common/dist/src/classes/features/other/DisableInputs";
import {mod} from "../../Mod";
import {MOD_FEATURE} from "../enum/ModConstants";

export function SpawnItemFirstFrame() {
    if (game.GetFrameCount() === 1) {
        Flog(`Spawning item on the floor: ${CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE}`);
        Isaac.Spawn(EntityType.PICKUP, PickupVariant.COLLECTIBLE, CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE, Vector(320, 300), Vector(0, 0), undefined);
    }
}

export function PlayerHasWizardryItem(player: EntityPlayer): boolean {
    return player.HasCollectible(CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE);
}

/**
 * Gets wizardry item's slot. if item doesn't exist returns -1.
 * @param player player
 */
export function GetWizardryItemActiveSlot(player: EntityPlayer): number {
    const slot = getActiveItemSlot(player, CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE);
    return slot ? slot : -1;
}


export function DisableArrowKeys(player: EntityPlayer) {
    Flog(`Disabling arrow keys for player ${player.Index}`)
    mod.disableShootingInputs(MOD_FEATURE);
}

export function EnableAllKeys(player: EntityPlayer) {
    Flog(`Enabling all keys for player ${player.Index}`)
    mod.enableAllInputs(MOD_FEATURE);
}