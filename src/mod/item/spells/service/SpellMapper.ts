import {SpellList} from "./SpellList";
import {ISpell} from "../ISpell";
import {game, jsonEncode, logError, newRNG} from "isaacscript-common";
import {mod} from "../../../../Mod";
import {HereticalRuneEntity} from "../../rune/HereticalRuneEntity";
import {EmptySpell} from "../concrete/EmptySpell";
import {Flog} from "../../../helper/CustomLogger";


const saveDataObject = {
    persistent: {},
    run: {
        // map: spellMap
        spellMap: new Map<string, ISpell>()
    },
    room: {},
    level: {}
};

export function registerSpellData(): void {
    mod.saveDataManager("unlockedSpellData", saveDataObject);
}


export function printSpellMap() {
    Flog(`${Array.from(saveDataObject.run.spellMap.keys()).join(", ")}`, `SPELL_MAP`);
}

export function getNextSpell(runes: Array<HereticalRuneEntity>, caster: EntityPlayer) : ISpell {
    const mappingName = getMappingKeyFromRunes(runes);
    const existingSpell = saveDataObject.run.spellMap.get(mappingName);
    if(existingSpell !== undefined) {
        return existingSpell;
    } else {
        const nextSpell =  pickNextSpell(caster);
        if(nextSpell === undefined) {
            return new EmptySpell();
        }
        saveDataObject.run.spellMap.set(mappingName, nextSpell);
        return nextSpell;
    }
}

function pickNextSpell(caster: EntityPlayer): ISpell | undefined {
    const rng = newRNG(game.GetSeeds().GetStartSeed());
    const knownSpells = Array.from(saveDataObject.run.spellMap.values());
    const modifiedSpellList = SpellList.map(value => value).filter(value => {
        return !knownSpells.find(kn => kn.getMappingName() === value.getMappingName());
    });
    if(modifiedSpellList.length === 0) {
        return undefined
    } else {
        const randomSpell = modifiedSpellList[Math.floor(rng.RandomFloat() * modifiedSpellList.length)];
        return randomSpell;
    }
}

function getMappingKeyFromRunes(runes: Array<HereticalRuneEntity>) : string {
    return `runes:[${runes.map(value => value.getSlotType()).join(",")}]`;
}







