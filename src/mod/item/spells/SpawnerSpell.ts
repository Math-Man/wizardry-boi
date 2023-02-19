import {SpellType} from "./data/SpellType";
import {AbstractSpellBase} from "./AbstractSpellBase";

export abstract class SpawnerSpell extends AbstractSpellBase {
    public getType(): SpellType {
        return SpellType.SPAWNER;
    }
}