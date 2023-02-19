import {NailStorm} from "../concrete/NailStorm";
import {KillAllSpell} from "../concrete/KillAllSpell";
import {SpawnShadow} from "../concrete/SpawnShadow/SpawnShadow";
import {AbstractSpellBase} from "../AbstractSpellBase";

interface SpellListing {
    mappingName: string,
    spellClass: new () => AbstractSpellBase
}

export const SpellList: SpellListing[] = [
    {
        mappingName: "NAIL_STORM",
        spellClass: NailStorm,
    },
    {
        mappingName: "KILL_ALL",
        spellClass: KillAllSpell,
    },
    {
        mappingName: "SPAWN_SHADOW",
        spellClass: SpawnShadow,
    }
] as SpellListing[];