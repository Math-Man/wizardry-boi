import {ModCallbackCustom, ModUpgraded} from "isaacscript-common";
import {CollectibleType} from "isaac-typescript-definitions";
import {CollectibleTypeCustom} from "../enum/CustomItems";
import {DeactivateWizardryItemCasting} from "../item/behaviour/WizardryItemActivationState";
import {FlushPlayerStateData} from "../item/data/WizardryStateDataCache";

export function PostPlayerCollectibleRemoved(mod: ModUpgraded): void {
    mod.AddCallbackCustom(ModCallbackCustom.POST_PLAYER_COLLECTIBLE_REMOVED, main, CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE);
}

function main(player: EntityPlayer, collectibleType: CollectibleType) {
    /**
     * Charge the item on pickup.
     */
    DeactivateWizardryItemCasting(player);
    FlushPlayerStateData(player);
}
