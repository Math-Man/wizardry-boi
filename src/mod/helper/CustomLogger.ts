import {game} from "isaacscript-common";

export function Flog(message: string, logId? : string) : void {
    Isaac.DebugString(`[WIZARDRY]${logId ? `[${logId}]` : ""}[Frame:${game.GetFrameCount()}]: ${message}`);
}