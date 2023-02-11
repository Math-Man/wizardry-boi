import {ModCallbackCustom, ModUpgraded, SHOOTING_ACTIONS_SET} from "isaacscript-common";
import {ButtonAction, InputHook} from "isaac-typescript-definitions";
import {Flog} from "../helper/CustomLogger";

export function PostPlayerInputAction(mod: ModUpgraded): void {
    mod.AddCallbackCustom(ModCallbackCustom.INPUT_ACTION_PLAYER, main);
}

function main(player: EntityPlayer, inputHook: InputHook, buttonAction: ButtonAction) : boolean |undefined {

    // Flog(`INPUT ACTION MOFOS ${InputHook[inputHook]}, ${ButtonAction[buttonAction]}`)

    if(SHOOTING_ACTIONS_SET.has(buttonAction) && inputHook === InputHook.GET_ACTION_VALUE) {
        Flog(`LOOK MAMA I AM SHOOTING!`)
    }

    return undefined;
}
