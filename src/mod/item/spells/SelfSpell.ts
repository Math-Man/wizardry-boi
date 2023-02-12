import {ISpell} from "./ISpell";
import {SpellType} from "./SpellType";
import {SpellParams} from "./SpellParams";

export abstract class SelfSpell implements ISpell {

    public abstract cast(params: SpellParams): void
    public getType(): SpellType {
        return SpellType.SELF;
    }

}