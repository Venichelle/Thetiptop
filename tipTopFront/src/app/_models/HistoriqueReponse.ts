export class HistoriqueReponse {
    nomLot: string;
    descriptionLot: string;
    dateRecuperation: string;
    constructor(nom: string, des: string, daterec: string) {
        this.nomLot = nom;
        this.descriptionLot = des;
        this.dateRecuperation = daterec;
    }



}