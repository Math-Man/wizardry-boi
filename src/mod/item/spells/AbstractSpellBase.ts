import {ISpell} from "./ISpell";
import {SpellType} from "./data/SpellType";
import {SpellParams} from "./data/SpellParams";
import {SpellQuality} from "./data/SpellQuality";

export abstract class AbstractSpellBase implements ISpell {

    public abstract cast(params: SpellParams): void;
    public abstract getType(): SpellType;
    public abstract getFlavorTextDescription(): string;
    public abstract  getFlavorTextTitle(): string;
    public abstract getFluxCost(): number;
    public abstract getMappingName(): string;
    public abstract getSpellQuality(): SpellQuality;
}