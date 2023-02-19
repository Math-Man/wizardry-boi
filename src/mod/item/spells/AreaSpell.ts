import {SpellType} from "./data/SpellType";
import {AbstractSpellBase} from "./AbstractSpellBase";

export abstract class AreaSpell extends AbstractSpellBase {
    public getType(): SpellType {
        return SpellType.AREA;
    }

}