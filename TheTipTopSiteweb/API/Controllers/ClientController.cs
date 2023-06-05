using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Controllers
{
  
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors()]
    public class ClientController : ControllerBase
    {
        private readonly ThetiptoptestContext thetiptoptestContext;

        public ClientController(ThetiptoptestContext t)
        {
            this.thetiptoptestContext = t;


        }
        [HttpGet]
        [Route("Participer")]
        public IActionResult Participer(int CodeCoupon, string email)
        {
            Lot lotse = new Lot();
            var lots = thetiptoptestContext.Lots.ToList();
            var coupons = thetiptoptestContext.Coupons.ToList();

            
                
            

                var coupon = thetiptoptestContext.Coupons.FirstOrDefault(F => F.CodeCoupon == CodeCoupon && F.Etat == "Distribué");


            if (coupon != null && coupon.Etat == "Distribué")
            {
                var user = thetiptoptestContext.Users.FirstOrDefault(u => u.Email == email);
                var data = thetiptoptestContext.Users.FirstOrDefault(c => c.Email == user.Email);



                coupon.UserId = data.Id;
                coupon.Etat = "Gain a récupérer";
                coupon.DateJeu = (DateTime.Now.Year + "-" + DateTime.Now.Month + "-" + DateTime.Now.Day + " " + DateTime.Now.Hour + ":" + DateTime.Now.Minute + ":" + DateTime.Now.Second);
                thetiptoptestContext.Entry(coupon).State = EntityState.Modified;
                thetiptoptestContext.SaveChanges();



                var Lotinfo = from C in coupons join L in lots on C.Idlot equals L.Idlot where C.UserId == user.Id && C.Idlot == L.Idlot select L;


                lotse = Lotinfo.ToList().First(x => x.Idlot == coupon.Idlot);

            }
            else 
            {

                return Ok("Code introuvable");
            
            }

            


            return Ok(lotse);
        }

        [HttpGet]
       
        [Route("Historique")]
        public IActionResult Historique(string email)
        {
            var user = thetiptoptestContext.Users.FirstOrDefault(u => u.Email == email);
            var Historique = new List<Historique>();
            var lot = new Lot();
            var histo = new Historique();


            var lots = thetiptoptestContext.Lots.ToList();
            var coupons = thetiptoptestContext.Coupons.Where(c => c.UserId == user.Id && c.Etat == "récupéré").ToList();
            var Fetchdata = (from l in lots join c in coupons on l.Idlot equals c.Idlot select new { l, c });

            //foreach (var histoi in Fetchdata)
            //{
            //    lot.Idlot = histoi.l.Idlot;
            //    lot.NomLot = histoi.l.NomLot;
            //    lot.DescriptionLot = histoi.l.DescriptionLot;
            //    histo.Lot = lot;
            //    Historique.Add(new Historique { Lot = lot, dateRecupération = histoi.c.DateRecuperation });
            //}
            for (int i = 0; i < Fetchdata.ToList().Count; i++)
            {
                lot.Idlot = Fetchdata.ToList()[i].l.Idlot;
                lot.NomLot = Fetchdata.ToList()[i].l.NomLot;
                lot.DescriptionLot = Fetchdata.ToList()[i].l.DescriptionLot;

                    Historique.Add(new Historique { dateRecuperation = Fetchdata.ToList()[i].c.DateRecuperation, Idlot = Fetchdata.ToList()[i].l.Idlot, NomLot = Fetchdata.ToList()[i].l.NomLot, DescriptionLot = Fetchdata.ToList()[i].l.DescriptionLot });

            }


            return Ok(Historique);

        }


    }
}
