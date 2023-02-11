import {ISpell} from "./ISpell";
import {SpellType} from "./SpellType";
import {SpellParams} from "./SpellParams";

export abstract class AreaSpell implements ISpell {

    public abstract cast(params: SpellParams): void
    public abstract getType(): SpellType

}