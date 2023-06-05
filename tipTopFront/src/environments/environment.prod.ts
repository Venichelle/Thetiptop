export const environment = {
  production: true,
  backendServer: "https://api.preprod.dsp-archiweb020-vm.fr",
  login: "/login",
  genereateTicket: "/api/Admin/Genererticket",
  getLots: "/api/Lots",
  statistiqueTicket: "/api/Admin/StatistiqueTicket",
  clients: "/ListClient",
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
