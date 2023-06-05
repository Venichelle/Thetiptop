using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {

        private readonly ThetiptoptestContext thetiptoptestContext;

        public TicketController(ThetiptoptestContext t)
        {

            this.thetiptoptestContext = t;

        }

        [HttpGet]
        [Route("Ticket")]
        public Coupon Ticket()
        {

            var Listcoupon = thetiptoptestContext.Coupons.ToList();


            int gain = 0;
            Coupon ticket = new Coupon();
            Random random = new Random();


            for (int i = 0; i < Listcoupon.Count; i++)
            {

                gain = random.Next(Listcoupon[i].Idcoupon);
            }


            if (gain != 0)
            {



                var ti = (from T in Listcoupon where T.Idcoupon == gain select T).ToList();
                var entity = thetiptoptestContext.Coupons.FirstOrDefault(item => item.Idcoupon == gain);
                entity.Etat = "Distribué";
                thetiptoptestContext.SaveChanges();
                foreach (var t in ti)
                {

                    ticket = t;



                }


            }

            return ticket;

        }




    }
}
