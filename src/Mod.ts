import {ISCFeature, ModCallbackCustom, upgradeMod} from "isaacscript-common";

export const MOD_NAME = "wizardry-boi";

const ISC_FEATURES = [
    ISCFeature.MODDED_ELEMENT_SETS,
    ISCFeature.PLAYER_INVENTORY,
    ISCFeature.RUN_IN_N_FRAMES,
    ISCFeature.SAVE_DATA_MANAGER,
    ISCFeature.SPAWN_COLLECTIBLE,
] as const;

const CUSTOM_CALLBACKS_USED = [
    ModCallbackCustom.POST_PICKUP_COLLECT,
    ModCallbackCustom.POST_PLAYER_COLLECTIBLE_ADDED
] as const;

const modVanilla = RegisterMod(MOD_NAME, 1);
export const mod = upgradeMod(
    modVanilla,
    ISC_FEATURES,
    CUSTOM_CALLBACKS_USED,
);
