import {SpawnShadow} from "./SpawnShadow";
import {CustomEntitiesNPC} from "../../../../enum/CustomEntities";
import {EntityType, Gaper2Variant} from "isaac-typescript-definitions";
import {VectorZero} from "isaacscript-common";
import {Flog} from "../../../../helper/CustomLogger";

export class ShadowEntity {

    private rootSpell: SpawnShadow;
    private gameEntity: EntityNPC;
    private caster: EntityPlayer;


    constructor(caster: EntityPlayer, rootSpell: SpawnShadow) {
        this.caster = caster;
        this.rootSpell = rootSpell;
        this.gameEntity = this.spawnGameEntity();
    }


    private spawnGameEntity(): EntityNPC {

        Flog(`ENTITY: ${CustomEntitiesNPC.WIZ_SHADOW_ENTITY}`);
        return <EntityNPC>Isaac.Spawn(CustomEntitiesNPC.WIZ_SHADOW_ENTITY, CustomEntitiesNPC.WIZ_SHADOW_ENTITY_VARIANT, 0, Vector(100, 100), VectorZero, undefined).ToNPC()
    }






}