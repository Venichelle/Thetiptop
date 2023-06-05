export class Person {
    email: string;
    nom: string;
    prenom: string;
    password: string;
    role?: string;
    user?: string;
    adresse?: string;
    ville?: string;
    postale?: string;

    constructor(email: string, nom: string, prenom: string, password: string, role: string, user: string, adresse: string, ville: string, postale: string) {
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.password = password;
        this.role = role;
        this.user = user;
        this.adresse = adresse;
        this.ville = ville;
        this.postale = postale;
    }
}