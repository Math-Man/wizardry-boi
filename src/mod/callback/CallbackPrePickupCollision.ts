import {
    EntityType,
    ModCallback,
    PickupVariant,
} from "isaac-typescript-definitions";
import {Flog} from "../helper/CustomLogger";
import {PlayerHasWizardryItem} from "../helper/ItemHelper";
import {ModUpgraded} from "isaacscript-common";

export function PrePickupCollision(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.PRE_PICKUP_COLLISION, main, PickupVariant.LIL_BATTERY);
}

function main(pickup: EntityPickup, collider: Entity, low: boolean): boolean | undefined {
    /**
     * If player has a wizardry item, they should not be able to pick up batteries
     */
    if(collider.Type === EntityType.PLAYER) {
        const player = collider.ToPlayer();
        if(player && PlayerHasWizardryItem(player)) {
            Flog(`No can do buddy!`)
            player.GetActiveItem()
            return true;
        }
    }
    return undefined;
}
