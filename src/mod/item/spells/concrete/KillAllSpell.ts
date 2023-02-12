import {AreaSpell} from "../AreaSpell";
import {SpellParams} from "../data/SpellParams";
import {getNPCs} from "isaacscript-common";

export class KillAllSpell extends AreaSpell {
    cast(caster: EntityPlayer, params: SpellParams): void {
        getNPCs(undefined, undefined, undefined, true)
            .filter(enemy => enemy.IsVulnerableEnemy())
            .forEach(enemy => enemy.Kill());
    }

}