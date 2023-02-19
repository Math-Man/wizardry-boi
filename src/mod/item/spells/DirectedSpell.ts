import {SpellType} from "./data/SpellType";
import {AbstractSpellBase} from "./AbstractSpellBase";

export abstract class DirectedSpell extends AbstractSpellBase {
    public getType(): SpellType {
        return SpellType.DIRECTED;
    }

}