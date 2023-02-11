import {ModCallbackCustom, ModUpgraded} from "isaacscript-common";
import {CollectibleType} from "isaac-typescript-definitions";
import {CollectibleTypeCustom} from "../enum/CustomItems";
import {FlushPlayerStateData, GetWizardryStateData} from "../item/data/WizardryStateDataCache";

export function PostPlayerCollectibleRemoved(mod: ModUpgraded): void {
    mod.AddCallbackCustom(ModCallbackCustom.POST_PLAYER_COLLECTIBLE_REMOVED, main, CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE);
}

function main(player: EntityPlayer, collectibleType: CollectibleType) {
    /**
     * Charge the item on pickup.
     */
    const state = GetWizardryStateData(player);
    if(state.DeactivateCasting()) {
        FlushPlayerStateData(player);
        return;
    }
}
