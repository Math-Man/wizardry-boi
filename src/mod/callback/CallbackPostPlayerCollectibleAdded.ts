import {ModCallbackCustom, ModUpgraded} from "isaacscript-common";
import {CollectibleType} from "isaac-typescript-definitions";
import {CollectibleTypeCustom} from "../enum/CustomItems";
import {RechargeWizardryItem} from "../item/behaviour/RechargeWizardryItem";

export function PostPlayerCollectibleAdded(mod: ModUpgraded): void {
    mod.AddCallbackCustom(ModCallbackCustom.POST_PLAYER_COLLECTIBLE_ADDED, main, CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE);
}

function main(player: EntityPlayer, collectibleType: CollectibleType) {
    /**
     * Charge the item on pickup.
     */
    RechargeWizardryItem(player);
}
