import {DirectedSpell} from "../DirectedSpell";
import {SpellParams} from "../data/SpellParams";
import {Flog} from "../../../helper/CustomLogger";

export class DummySpell extends DirectedSpell {

    cast(caster: EntityPlayer, params: SpellParams): void {
        Flog(`You have casted a spell, congratz.`)
    }

}