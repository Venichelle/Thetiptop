using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace API.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
   
    public class HuissierController : ControllerBase
    {
        private readonly ThetiptoptestContext thetiptoptestContext;

        public HuissierController(ThetiptoptestContext context)
        {
            this.thetiptoptestContext = context;

        }



        [HttpGet]
      
        public IActionResult HuissierCheck()
        {

            User user=new User();

            int coupon = 0;
            string UserID = "";
            var gagnant = thetiptoptestContext.Coupons.Where(c => c.Etat == "Récupéré").ToList();

            Random random = new Random();
            for (int i = 0; i < gagnant.Count; i++)
            {
                coupon = random.Next(i);
                UserID = gagnant[coupon].UserId;
            }
            var users = thetiptoptestContext.Users.Where(u => u.Id == UserID).ToList();

            if (users[0] == null)
            {

                return NotFound();

            }

            user.Prenom = users[0].Prenom;
            user.Nom = users[0].Nom;
            user.Email= users[0].Email;
           



            return Ok(user);

        }

      
       




    }
}
