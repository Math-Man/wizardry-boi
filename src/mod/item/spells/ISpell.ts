import {SpellType} from "./SpellType";

export interface ISpell {
    getType(): SpellType;
    cast(): void;
}