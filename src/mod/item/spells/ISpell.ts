import {SpellType} from "./data/SpellType";
import {SpellParams} from "./data/SpellParams";
import {SpellQuality} from "./data/SpellQuality";

export interface ISpell {

    /**
     * Method that is called when the spell is cast by the player
     * @param params spell params such as the caster.
     */
    cast(params: SpellParams): void;

    /**
     * Spell arch-type
     */
    getType(): SpellType;

    /**
     * Mapping name of the spell. Used by the spell mapping services to distinguish between spells
     * Should be unique.
     */
    getMappingName(): string;

    /**
     * Spell quality. Used for spell weighting and cosmetic purposes.
     */
    getSpellQuality(): SpellQuality

    /**
     * Flavor text shown to the player when they cast the spell
     */
    getFlavorTextTitle(): string;

    /**
     * Flavor sub-text shown to the player when they cast the spell
     */
    getFlavorTextDescription(): string;

    /**
     * Flux cost of the spell
     */
    getFluxCost(): number;
}