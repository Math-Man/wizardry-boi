import {AreaSpell} from "./AreaSpell";
import {SpellParams} from "./SpellParams";
import {getNPCs} from "isaacscript-common";

export class KillAllSpell extends AreaSpell {
    cast(params: SpellParams): void {
        getNPCs(undefined, undefined, undefined, true)
            .filter(enemy => enemy.IsVulnerableEnemy())
            .forEach(enemy => enemy.Kill());
    }

}