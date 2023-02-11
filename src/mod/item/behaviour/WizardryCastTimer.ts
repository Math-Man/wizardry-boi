import {GAME_FRAMES_PER_SECOND} from "isaacscript-common";
import {mod} from "../../../Mod";

export function WizardrySetCastTimer(player: EntityPlayer, castTimeSeconds: int,  func: () => void): void {
    mod.runInNGameFrames(func, (castTimeSeconds * GAME_FRAMES_PER_SECOND), false)
}
