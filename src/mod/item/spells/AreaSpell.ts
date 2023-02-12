import {ISpell} from "./ISpell";
import {SpellType} from "./data/SpellType";
import {SpellParams} from "./data/SpellParams";

export abstract class AreaSpell implements ISpell {

    public abstract cast(caster: EntityPlayer, params: SpellParams): void
    public getType(): SpellType {
        return SpellType.AREA;
    }

}