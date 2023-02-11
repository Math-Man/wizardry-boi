export class WizardryStateData {
    public active : boolean;

    public constructor() {
        this.active = false;
    }

    public ToString(): string {
        return `${this.active}`
    }
}