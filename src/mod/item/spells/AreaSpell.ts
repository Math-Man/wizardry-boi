import {ISpell} from "./ISpell";
import {SpellType} from "./SpellType";

export abstract class AreaSpell implements ISpell {

    public abstract cast(): void
    public abstract getType(): SpellType

}