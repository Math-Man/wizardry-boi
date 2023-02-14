import {DirectedSpell} from "../DirectedSpell";
import {SpellParams} from "../data/SpellParams";
import {getNPCs, getRandomSeed, newRNG, spawnTear} from "isaacscript-common";
import {TearFlag, TearVariant} from "isaac-typescript-definitions";
import {CreateCompletableFuture, CreateRandomKey,} from "../../../helper/CompletableFuture";
import {SpellQuality} from "../data/SpellQuality";

export class NailStorm extends DirectedSpell {

    cast(params: SpellParams): void {

        const rng = newRNG(getRandomSeed())

        const targets = getNPCs(undefined, undefined, undefined, true)
            .filter(enemy => enemy.IsVulnerableEnemy())

        for (let i = 0; i < 10; i++) {
            CreateCompletableFuture(50 * i,
                CreateRandomKey(rng),
                () => this.SpawnTargetedTear(params.caster, rng, targets));
        }

    }

    private SpawnTargetedTear(caster: EntityPlayer, rng: RNG, targets: EntityNPC[]) {
        targets.forEach(enemy => {

            const targetPosition = (enemy.Position.sub(caster.Position).Normalized())
                .Resized(20)
                .add(Vector((rng.RandomFloat()*5), (rng.RandomFloat()*5)));
            const spawnedTear = spawnTear(
                TearVariant.NAIL,
                0,
                caster.Position,
                (targetPosition),
                caster
            );

            spawnedTear.AddTearFlags(TearFlag.SPLIT)

        });
    }

    getFlavorTextTitle(): string {
        return "Nail Storm";
    }

    getFlavorTextDescription(): string {
        return "Bite them until they are lame!";
    }

    getFluxCost(): number {
        return 1;
    }

    getMappingName(): string {
        return "NAIL_STORM";
    }

    getSpellQuality(): SpellQuality {
        return SpellQuality.GOOD;
    }

}