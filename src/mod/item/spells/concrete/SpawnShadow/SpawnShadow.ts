import {SpellParams} from "../../data/SpellParams";
import {SpellQuality} from "../../data/SpellQuality";
import {SpawnerSpell} from "../../SpawnerSpell";
import {ShadowEntity} from "./ShadowEntity";

export class SpawnShadow extends SpawnerSpell {


    cast(params: SpellParams): void {
        const entity = new ShadowEntity(params.caster, this);
    }

    getFlavorTextTitle(): string {
        return "Walking Shadows";
    }

    getFlavorTextDescription(): string {
        return "Abyssal projections";
    }

    getFluxCost(): number {
        return 1;
    }

    getMappingName(): string {
        return "SPAWN_SHADOW";
    }

    getSpellQuality(): SpellQuality {
        return SpellQuality.GOOD;
    }

}