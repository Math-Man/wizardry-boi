import {SpellType} from "./data/SpellType";
import {SpellParams} from "./data/SpellParams";

export interface ISpell {
    cast(caster: EntityPlayer, params: SpellParams): void;
    getType(): SpellType;
}