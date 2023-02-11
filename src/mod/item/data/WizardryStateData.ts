import {WizardryRuneHandler} from "../spells/WizardryRuneHandler";

export class WizardryStateData {
    public castingSpell: boolean;
    public runeHandler: WizardryRuneHandler;

    public constructor(runeHandler: WizardryRuneHandler) {
        this.castingSpell = false;
        this.runeHandler = runeHandler;
    }

    public ToString(): string {
        return `${this.castingSpell}`
    }
}