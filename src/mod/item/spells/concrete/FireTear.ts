import {DirectedSpell} from "../DirectedSpell";
import {SpellParams} from "../data/SpellParams";
import {getNPCs, getRandomSeed, newRNG, spawnTear} from "isaacscript-common";
import {TearVariant} from "isaac-typescript-definitions";
import {
    CreateCompletableFuture,
    CreateRandomKey,
} from "../../../helper/CompletableFuture";

export class NailStorm extends DirectedSpell {

    cast(caster: EntityPlayer, params: SpellParams): void {

        const rng = newRNG(getRandomSeed())

        const targets = getNPCs(undefined, undefined, undefined, true)
            .filter(enemy => enemy.IsVulnerableEnemy())

        for (let i = 0; i < 10; i++) {
            CreateCompletableFuture(50 * i,
                CreateRandomKey(rng),
                () => this.SpawnTargetedTear(caster, rng, targets));
        }

    }

    private SpawnTargetedTear(caster: EntityPlayer, rng: RNG, targets: EntityNPC[]) {
        targets.forEach(enemy => {

            const targetPosition = (enemy.Position.sub(caster.Position).Normalized())
                .Resized(20)
                .add(Vector((rng.RandomFloat()), (rng.RandomFloat())));
            spawnTear(
                TearVariant.NAIL,
                0,
                caster.Position,
                (targetPosition),
                caster
            );
        });
    }

}