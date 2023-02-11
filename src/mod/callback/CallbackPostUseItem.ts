import {ActiveSlot, CollectibleType, ModCallback, UseFlag} from "isaac-typescript-definitions";
import {Flog} from "../helper/CustomLogger";
import {WizardrySetCastTimer} from "../item/behaviour/WizardryCastTimer";
import {ActivateWizardryItem, DeactivateWizardryItem} from "../item/behaviour/ActivateWizardryItem";
import {RechargeWizardryItem} from "../item/behaviour/RechargeWizardryItem";
import {PostUserWizardryItem} from "../item/behaviour/PostUserWizardryItem";
import {CollectibleTypeCustom} from "../enum/CustomItems";
import {ModUpgraded} from "isaacscript-common";

export function PostUseItemInit(mod: ModUpgraded): void {
    mod.AddCallback(ModCallback.POST_USE_ITEM, main);
}

function main(collectibleType: CollectibleType, rng : RNG, player: EntityPlayer,
              userFlags: BitFlags<UseFlag>, activeSlot: ActiveSlot, customData: int): boolean | undefined {

    if(collectibleType === CollectibleTypeCustom.WIZ_HERETICAL_GRIMOIRE) {
        Flog(`POST: ${collectibleType}, ${rng}, ${player}, ${userFlags}, ${activeSlot}, ${customData}`)
        PostUserWizardryItem(player);
    }

    return undefined;
}
