import {GAME_FRAMES_PER_SECOND, getRandom, logError} from "isaacscript-common";
import {mod} from "../../Mod";
import {Flog} from "./CustomLogger";


const completableFutureTracker = new Map<unknown, () => void>();

export function CreateCompletableFuture(castTimeSeconds: int, key: unknown, func: () => void, onFail?: () => void): void {
    if(key === undefined) {
        logError(`Can't register completable cast timer future with undefined key!`)
        return;
    }

    const future = () => CompletableFutureWrapper(key, func, (onFail ? onFail : () => {}));
    completableFutureTracker.set(key, future);
    Flog(`Registering future with key: ${key}`)
    mod.runInNGameFrames(future, (castTimeSeconds * GAME_FRAMES_PER_SECOND), false)
}

function CompletableFutureWrapper(key: unknown, func: () => void, onFail: () => void): void {
    Flog(`CURRENT FEATURES: ${Array.from(completableFutureTracker.keys()).join(", ")}`)
    if(completableFutureTracker.has(key)) {
        func();
        Flog(`Execution success for completable future for key: ${key}`);
    } else {
        onFail();
        Flog(`Execution canceled for completable future for key: ${key}`);
    }
    completableFutureTracker.delete(key);
}

export function CancelAllCompletableFutures(): void {
    completableFutureTracker.clear();
}

export function CancelCompletableFuture(key: unknown): boolean {
    return completableFutureTracker.delete(key);
}

export function CreateRandomKey(rng: RNG): string {
    return (getRandom(rng) + 1).toString(36).substring(7)
}