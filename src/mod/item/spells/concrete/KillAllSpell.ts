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
        return "Mortis";
    }

    getFlavorTextTitle(): string {
        return "Forget all";
    }

    getFluxCost(): number {
        return 100;
    }

    getMappingName(): string {
        return "KILL_ALL";
    }

    getSpellQuality(): SpellQuality {
        return SpellQuality.CHEAT;
    }

}