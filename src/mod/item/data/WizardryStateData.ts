import {WizardrySpellHandler} from "../rune/WizardrySpellHandler";
import {ISpell} from "../spells/ISpell";
import {logError} from "isaacscript-common";
import {DisableArrowKeys, EnableAllKeys} from "../../helper/ItemHelper";
import {Flog} from "../../helper/CustomLogger";
import {RuneSlot} from "../rune/RuneSlot";
import {SpellParams} from "../spells/data/SpellParams";
import {RechargeWizardryItem} from "../behaviour/RechargeWizardryItem";
import {mod} from "../../../Mod";
import {CancelCompletableFuture, CreateRandomKey} from "../../helper/CompletableFuture";
import {startSpellCastingAudio} from "../sound/SpellSoundManager";

export class WizardryStateData {

    public player: EntityPlayer;
    public castingSpell: boolean;
    public runeHandler: WizardrySpellHandler;
    private lastCompletableFutureKey: string | undefined;

    public constructor(player: EntityPlayer, runeHandler: WizardrySpellHandler) {
        this.castingSpell = false;
        this.runeHandler = runeHandler;
        this.player = player;
        this.lastCompletableFutureKey = undefined;
    }

    public getActiveSpell(): ISpell | undefined {
        return this.runeHandler.getActiveSpell();
    }

    public setActiveSpell(spell: ISpell | undefined): void {
        this.runeHandler.setActiveSpell(spell);
    }

    public resetState() {
        EnableAllKeys(this.player)
        this.setActiveSpell(undefined);
        RechargeWizardryItem(this.player)
    }

    public ActivateCasting(rng: RNG): void {
        this.lastCompletableFutureKey = CreateRandomKey(rng);
        startSpellCastingAudio(this.player, rng, this);
        DisableArrowKeys(this.player)
        this.castingSpell = true;
        Flog(`Started Casting spell! Future key: ${this.lastCompletableFutureKey}`);
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
            mod.runInNGameFrames(() => {
                EnableAllKeys(this.player)
            }, 5, false);
            Flog(`Stopped casting spell! [${runes.map(value => RuneSlot[value]).join(",")}]`);
        }

        Flog(`Canceling future: ${this.lastCompletableFutureKey}`)
        CancelCompletableFuture(this.lastCompletableFutureKey);
        RechargeWizardryItem(this.player)
        return true;
    }

    /**
     * Casts the spell, modifies the related cached fields.
     * Does not take the player out of casting state, it should be done manually.
     * @param extraParams
     */
    public castActiveSpell(extraParams: unknown[]): void {
        const spell = this.runeHandler.getActiveSpell();
        if(!spell) {
            logError(`Tried to cast the current active spell but the spell is empty.`);
            return;
        }

        // Cast the spell
        const params = {
            caster: this.player,
            extraParams: extraParams
        } as SpellParams
        spell.cast(params);

        // Remove it
        this.runeHandler.setActiveSpell(undefined)

        // mod.runNextRenderFrame(() => {
        //     RechargeWizardryItem(this.player);
        // }, false)
    }


    public getLastCompletableFutureKey() : string | undefined{
        return this.lastCompletableFutureKey;
    }


    public ToString(): string {
        return `${this.castingSpell}`
    }
}