export class StatistiqueTickets {
    destribue: number;
    nonDestribue: number;
    gainaRecuperer: number;
    gainRecupere: number;

    constructor(destribue: number, nonDestribue: number, gainaRecuperer: number, gainRecupere: number) {
        this.destribue = destribue;
        this.nonDestribue = nonDestribue;
        this.gainaRecuperer = gainaRecuperer;
        this.gainRecupere = gainRecupere;
    }
}