import {RuneSlot} from "../spells/RuneSlot";

export class HereticalRuneEntity {

    private readonly gameEntity: EntityEffect;
    private readonly castedBy: EntityPlayer;
    private readonly slotType: RuneSlot;


    public constructor(gameEntity: EntityEffect, castedBy: EntityPlayer, slot: RuneSlot) {
        this.gameEntity = gameEntity;
        this.castedBy = castedBy;
        this.slotType = slot;
    }


    public getSlotType(): RuneSlot {
        return this.slotType;
    }

    public getCaster(): EntityPlayer {
        return this.castedBy;
    }

    public getGameEntity(): EntityEffect {
        return this.gameEntity;
    }

}