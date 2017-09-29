export class BreachFormulaVariables {

    constructor(){
        this.usesHeight = false;
        this.usesVolume = false;
        this.usesStorage = false;
        this.usesWidth = false;
        this.usesLength = false;
    }
    
    usesHeight: boolean;
    usesVolume: boolean;
    usesStorage: boolean;
    usesWidth: boolean;
    usesLength: boolean;
    height: number;
    volume: number;
    storage: number;
    width: number;
    length: number;
    volumeLabel: any;
    heightLabel: any;
    storageLabel: any;
    widthLabel: any;
    lengthLabel: any;
}
  