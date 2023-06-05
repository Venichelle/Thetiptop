using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Client")]
    public class HistoriquesController : ControllerBase
    {

        private readonly ThetiptoptestContext thetiptoptestContext;

        public HistoriquesController(ThetiptoptestContext thetiptoptestContext)
        {
            this.thetiptoptestContext = thetiptoptestContext;


        }


        [HttpGet]
        public IActionResult Historique()
        {


            Historique historique = new Historique();
            List<Historique> historiques = new List<Historique>();
            try
            {
                var user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
                var data = thetiptoptestContext.Users.FirstOrDefault(c => c.Email == user.Subject.Name);
                var lots = thetiptoptestContext.Lots.ToList();
                var Coupons = thetiptoptestContext.Coupons.ToList().Where(x => x.Etat == "récupéré" || x.Etat == "Gain à récupérer");

                var histol = from L in lots join C in Coupons on L.Idlot equals C.Idlot where C.UserId == data.Id select new { L, C };

                for (int i = 0; i < histol.ToList().Count; i++)
                {
                    historique.Idlot = histol.ToList()[i].L.Idlot;
                    historique.NomLot = histol.ToList()[i].L.NomLot;
                    historique.DescriptionLot = histol.ToList()[i].L.DescriptionLot;
                    historique.dateRecuperation = histol.ToList()[i].C.DateRecuperation;

                    historiques.Add(historique);
                }


            }
            catch (Exception ex)
            {
                return NotFound();
            }
            return Ok(historiques);
        }





    }
}
