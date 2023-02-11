import {ISpell} from "./ISpell";
import {SpellType} from "./SpellType";

export abstract class DirectedSpell implements ISpell {

    public abstract cast(): void
    public abstract getType(): SpellType

}