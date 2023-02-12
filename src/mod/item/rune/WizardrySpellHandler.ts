import {RuneSlot} from "./RuneSlot";
import {Flog} from "../../helper/CustomLogger";
import {EntityType} from "isaac-typescript-definitions";
import {CustomEntitiesEffects} from "../../enum/CustomEntities";
import {HereticalRuneEntity} from "./HereticalRuneEntity";
import {ISpell} from "../spells/ISpell";

export class WizardrySpellHandler {

    private readonly currentCastRunesEntities : Array<HereticalRuneEntity>;
    private readonly player: EntityPlayer;

    /**
     * If player has successfully cast a spell, this value is set
     */
    private currentSpell: ISpell | undefined;

    public constructor(player: EntityPlayer) {
        this.currentCastRunesEntities = [];
        this.player = player
    }


    public getActiveSpell(): ISpell | undefined {
        return this.currentSpell;
    }

    public setActiveSpell(spell: ISpell | undefined): void {
        this.currentSpell = spell;
    }


    public CastRune(slotCast: RuneSlot): void {
        Flog(`Rune cast: ${RuneSlot[slotCast]}`)
        const spawnedEntity = Isaac.Spawn(EntityType.EFFECT, CustomEntitiesEffects.WIZ_HERETICAL_RUNE, 0, this.player.Position, Vector(0, 0), this.player)
        spawnedEntity.GetSprite().Play(`rune${slotCast+1}`, true);


        // TODO: IMPORTANT: Instead of creating a new rune entity everytime, re-use it by object polling it.
        this.currentCastRunesEntities.push(new HereticalRuneEntity(
            <EntityEffect>spawnedEntity.ToEffect(),
            this.player,
            slotCast
        ));
    }

    public getCurrentlyCastRuneEntities() : Array<HereticalRuneEntity> {
        return this.currentCastRunesEntities;
    }

    /**
     * Clears the cast runes, deletes the rune entities and clears the array.
     * returns the state before it is cleared.
     */
    public flushCurrentlyCastRunes(): Array<RuneSlot> {
         // Clear the array, return the previous splice.
        this.currentCastRunesEntities.forEach(runeEntity => {
            runeEntity.getGameEntity().Remove()
        })
        const runeEntities = this.currentCastRunesEntities.splice(0, this.currentCastRunesEntities.length);
        return runeEntities.map(value => value.getSlotType());
    }

}