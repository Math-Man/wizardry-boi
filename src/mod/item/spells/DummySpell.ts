import {DirectedSpell} from "./DirectedSpell";
import {SpellParams} from "./SpellParams";
import {Flog} from "../../helper/CustomLogger";

export class DummySpell extends DirectedSpell {

    cast(params: SpellParams): void {
        Flog(`You have casted a spell, congratz.`)
    }

}