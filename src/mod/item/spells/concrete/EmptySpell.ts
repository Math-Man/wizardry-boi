import {SpellParams} from "../data/SpellParams";
import {SpellQuality} from "../data/SpellQuality";
import {SelfSpell} from "../SelfSpell";
import {Flog} from "../../../helper/CustomLogger";

export class EmptySpell extends SelfSpell {

    cast(params: SpellParams): void {
        Flog("Spell fizzles")
    }

    getFlavorTextDescription(): string {
        return "You get nothing, you lose.";
    }

    getFlavorTextTitle(): string {
        return "Nothing";
    }

    getFluxCost(): number {
        return 0;
    }

    getMappingName(): string {
        return "EMPTY_SPELL";
    }

    getSpellQuality(): SpellQuality {
        return SpellQuality.INVALID;
    }

}