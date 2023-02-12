import {ISpell} from "./ISpell";
import {SpellType} from "./SpellType";
import {SpellParams} from "./SpellParams";

export abstract class DirectedSpell implements ISpell {

    public abstract cast(params: SpellParams): void
    public getType(): SpellType {
        return SpellType.DIRECTED;
    }

}