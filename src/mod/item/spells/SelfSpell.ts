import {SpellType} from "./data/SpellType";
import {AbstractSpellBase} from "./AbstractSpellBase";

export abstract class SelfSpell extends AbstractSpellBase {
    public getType(): SpellType {
        return SpellType.SELF;
    }

}