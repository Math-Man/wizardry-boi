import {SpellType} from "./SpellType";
import {SpellParams} from "./SpellParams";

export interface ISpell {
    cast(params: SpellParams): void;
    getType(): SpellType;
}