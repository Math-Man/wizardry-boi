import {WizardrySpellHandler} from "../rune/WizardrySpellHandler";
import {ISpell} from "../spells/ISpell";
import {logError} from "isaacscript-common";
import {DisableArrowKeys, EnableAllKeys} from "../../helper/ItemHelper";
import {Flog} from "../../helper/CustomLogger";
import {RuneSlot} from "../rune/RuneSlot";
import {SpellParams} from "../spells/SpellParams";

export class WizardryStateData {

    public player: EntityPlayer;
    public castingSpell: boolean;
    public runeHandler: WizardrySpellHandler;


    public constructor(player: EntityPlayer, runeHandler: WizardrySpellHandler) {
        this.castingSpell = false;
        this.runeHandler = runeHandler;
        this.player = player;
    }

    public getActiveSpell(): ISpell | undefined {
        return this.runeHandler.getActiveSpell();
    }

    public setActiveSpell(spell: ISpell): void {
        this.runeHandler.setActiveSpell(spell);
    }


    public ActivateCasting(): void {
        DisableArrowKeys(this.player)
        Flog(`Started Casting spell!`);
    }

    public DeactivateCasting(): boolean {
        // Player is gone?
        if (!this.player) {
            logError(`Tried to deactivate casting but the player is gone?`)
            return false;
        }

        if (!this.getActiveSpell()) {
            this.castingSpell = false;
            const runes = this.runeHandler.flushCurrentlyCastRunes();
            EnableAllKeys(this.player)
            Flog(`Stopped casting spell! [${runes.map(value => RuneSlot[value]).join(",")}]`);
        }

        return true;
    }

    public castActiveSpell(extraParams: unknown[]): void {
        const spell = this.runeHandler.getActiveSpell();
        if(!spell) {
            logError(`Tried to cast the current active spell but the spell is empty.`);
            return;
        }

        // Cast the spell
        const params = {
            player: this.player,
            extraParams: extraParams
        } as SpellParams
        spell.cast(params);

        // Remove it
        this.runeHandler.setActiveSpell(undefined)

        // De-activate spell-casting state
        // this.DeactivateCasting();
    }



    public ToString(): string {
        return `${this.castingSpell}`
    }
}