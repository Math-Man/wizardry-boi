import {RuneSlot} from "./RuneSlot";
import {Flog} from "../../helper/CustomLogger";
import {EntityType} from "isaac-typescript-definitions";
import {CustomEntitiesEffects} from "../../enum/CustomEntities";
import {HereticalRuneEntity} from "./HereticalRuneEntity";

export class WizardryRuneHandler {

    private readonly currentCastRunes : Array<RuneSlot>;
    private readonly currentCastRunesEntities : Array<HereticalRuneEntity>;
    private readonly player: EntityPlayer;

    public constructor(player: EntityPlayer) {
        this.currentCastRunes = [];
        this.currentCastRunesEntities = [];
        this.player = player
    }

    public CastRune(slotCast: RuneSlot): void {
        Flog(`Rune cast: ${RuneSlot[slotCast]} current: ${this.currentCastRunes}`)
        this.currentCastRunes.push(slotCast)
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
    public getCurrentlyCastRunes() : Array<RuneSlot> {
        return this.currentCastRunes;
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
        this.currentCastRunesEntities.splice(0, this.currentCastRunesEntities.length);
        return this.currentCastRunes.splice(0, this.currentCastRunes.length);
    }

}