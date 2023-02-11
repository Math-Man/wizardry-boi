import {getPlayers} from "isaacscript-common";
import {PlayerHasWizardryItem} from "../../helper/ItemHelper";
import {GetWizardryStateData} from "../data/WizardryStateDataCache";

export function DrawWizardryRunes() {
    const realPlayers = getPlayers();
    for (const player of realPlayers) {
        if (!PlayerHasWizardryItem(player)) {
            continue;
        }

        const playerStateData = GetWizardryStateData(player);
        for (const currentlyCastRuneEntity of playerStateData.runeHandler.getCurrentlyCastRuneEntities()) {
            const runeFrame =  currentlyCastRuneEntity.getGameEntity().FrameCount;
            const runePosition = Vector(
                currentlyCastRuneEntity.getCaster().Position.X + Math.sin((runeFrame % (360 * 2)) / (Math.PI * 2)) * 32,
                (currentlyCastRuneEntity.getCaster().Position.Y - 16) + Math.cos((runeFrame % (360 * 2)) / (Math.PI * 2)) * 32
            );
            currentlyCastRuneEntity.getGameEntity().Position = runePosition;
        }

    }
}