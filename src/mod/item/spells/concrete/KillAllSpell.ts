import {AreaSpell} from "../AreaSpell";
import {SpellParams} from "../data/SpellParams";
import {getNPCs} from "isaacscript-common";
import {SpellQuality} from "../data/SpellQuality";

export class KillAllSpell extends AreaSpell {
    cast(params: SpellParams): void {
        getNPCs(undefined, undefined, undefined, true)
            .filter(enemy => enemy.IsVulnerableEnemy())
            .forEach(enemy => enemy.Kill());
    }

    getFlavorTextDescription(): string {
        return "";
    }

    getFlavorTextTitle(): string {
        return "";
    }

    getFluxCost(): number {
        return 0;
    }

    getMappingName(): string {
        return "";
    }

    getSpellQuality(): SpellQuality {
        return 0;
    }

}