import {CreateCompletableFuture, CreateRandomKey} from "../../helper/CompletableFuture";
import {sfxManager} from "isaacscript-common";
import {SoundsCustom} from "../../enum/SoundsCustom";
import {WizardryStateData} from "../data/WizardryStateData";
import {Flog} from "../../helper/CustomLogger";

const DELAY_SECONDS = 0.9;
const MAX_ITERATION = 4;

export function startSpellCastingAudio(player: EntityPlayer, rng: RNG, state: WizardryStateData) {
    // TODO: Make this better? Is it always going to be 4 seconds?
    CreateCompletableFuture(DELAY_SECONDS * 1000, CreateRandomKey(rng), () => playNextCountdownAudio(rng, 1, state));
}


function playNextCountdownAudio(rng: RNG, iteration: int, state: WizardryStateData): void {

    Flog(`Sound iteration ${iteration}, state is casting: ${state.castingSpell}`)


    if(iteration > MAX_ITERATION || !state.castingSpell || state.getActiveSpell() !== undefined) {
        return;
    }

    sfxManager.Play(SoundsCustom.WIZARDRY_SPELL_CAST_COUNTDOWN, 3, 1);
    CreateCompletableFuture(DELAY_SECONDS * 1000, CreateRandomKey(rng), () => playNextCountdownAudio(rng, iteration + 1, state));
}