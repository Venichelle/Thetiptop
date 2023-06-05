using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
  
    public class EmployeController : ControllerBase
    {
        private readonly ThetiptoptestContext TheTipTopSiteweb;

        public EmployeController(ThetiptoptestContext thetiptoptestContext)
        {

            this.TheTipTopSiteweb = thetiptoptestContext;

        }

        //[HttpGet]

        [HttpPost]
        [Route("CheckerGain")]
        public IActionResult Index(int NumeroCoupn)
        {

            Employe employe = new Employe();

            ApplicationUser applicationUser = new ApplicationUser();
            Coupon Coupon = new Coupon();
            var d = TheTipTopSiteweb.Coupons.FirstOrDefault(c => c.CodeCoupon == NumeroCoupn && c.Etat == "Gain a récupérer");

              var lot=TheTipTopSiteweb.Lots.First(x=>x.Idlot== d.Idlot);

            employe.CodeCoupon=d.CodeCoupon.ToString();
            employe.LotNom=lot.NomLot;

          
            return Ok(employe);
        }
        [HttpPost]
        [Route("Validation")]
        public IActionResult Validation(int idcoupon)
        {
            var coupons = TheTipTopSiteweb.Coupons.ToList();
           
            if (idcoupon !=null )
            {
                var coupon = TheTipTopSiteweb.Coupons.FirstOrDefault(F => F.CodeCoupon == idcoupon);

                if (coupon != null)
                {

                    coupon.Etat = "récupéré";
                    coupon.DateRecuperation = (DateTime.Now.Year + "-" + DateTime.Now.Month + "-" + DateTime.Now.Day + " " + DateTime.Now.Hour + ":" + DateTime.Now.Minute + ":" + DateTime.Now.Second);
                   
                    TheTipTopSiteweb.SaveChanges();


                }

            }

            return Ok("Le Gain récupéré ");

        }




    }
}
