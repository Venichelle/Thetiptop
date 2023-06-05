// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backendServer: "https://api.preprod.dsp-archiweb020-vm.fr",
  login: "/login",
  genereateTicket: "/api/Admin/Genererticket",
  getLots: "/api/Lots",
  statistiqueTicket: "/api/Admin/StatistiqueTicket",
  clients: "/api/Admin/ListClient",
  ajoutUtilsateur: "/api/Admin/AjouterUtilisateur",
  modificationRole: "/api/Admin/ModifierRoleUtilisateur?Email=",
  supprimerClient: "/api/Admin/SupprimerClient?email=",
  enregistrer: "/Register",
  participer: "/api/Client/Participer?CodeCoupon=",
  historique: "/api/Client/Historique?email=",
  verifierGain: "/api/Employe/CheckerGain?NumeroCoupn=",
  recuperGain: "/api/Employe/Validation?idcoupon=",
  tirage:"/api/Huissier"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
