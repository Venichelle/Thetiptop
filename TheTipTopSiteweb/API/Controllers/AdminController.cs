using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using API.Models;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System.Threading.Tasks;
using API.Controllers;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors;

namespace API
{
    
    [Route("api/[controller]")]
    [ApiController]

    public class AdminController : ControllerBase
    {
        private readonly ThetiptoptestContext theTipTopcontext;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<ApplicationUser> roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration configuration;

      
        public AdminController(ThetiptoptestContext theTipTopcontext, SignInManager<ApplicationUser> _signInManager, UserManager<ApplicationUser> _userManager, IConfiguration Configuration)
        {
            this.theTipTopcontext = theTipTopcontext;
            this._signInManager = _signInManager;
            this._userManager = _userManager;
            this.configuration = Configuration;


        }
       // [Authorize]
        [Route("Genererticket")]
        [ActionName("Generer ticket")]
        [HttpPost]
        public IActionResult CreationTickit()
        {
            int f;



            while (theTipTopcontext.Coupons.Count() < 1500)
            {
                //Random random = new Random();
                Random random = new();


                for (int i = 0; i < 1500 * 0.60; i++)
                {
                    f = random.Next(1000000000);



                    var c = new Coupon() { CodeCoupon = f, DateCreation = DateTime.Now, DateFin = DateTime.Parse(DateTime.Now.AddMonths(1).ToString()), Etat = "Non distribué", Idlot = 1 };


                    var find = theTipTopcontext.Coupons.Where(c => c.CodeCoupon != f);
                    if (find != null)
                    {
                        theTipTopcontext.Coupons.Add(c);
                        theTipTopcontext.SaveChanges();

                    }
                }

                for (int i = 0; i < 1500 * 0.10; i++)
                {
                    f = random.Next(1000000000);



                    var c = new Coupon() { CodeCoupon = f, DateCreation = DateTime.Now, DateFin = DateTime.Parse(DateTime.Now.AddMonths(1).ToString()), Etat = "Non distribué", Idlot = 2 };


                    var find = theTipTopcontext.Coupons.Where(c => c.CodeCoupon != f);
                    if (find != null)
                    {

                        theTipTopcontext.Coupons.Add(c);
                        theTipTopcontext.SaveChanges();

                    }
                }
                for (int i = 0; i < 1500 * 0.10; i++)
                {
                    f = random.Next(1000000000);



                    var c = new Coupon() { CodeCoupon = f, DateCreation = DateTime.Now, DateFin = DateTime.Parse(DateTime.Now.AddMonths(1).ToString()), Etat = "Non distribué", Idlot = 3 };


                    var find = theTipTopcontext.Coupons.Where(c => c.CodeCoupon != f);
                    if (find != null)
                    {
                        theTipTopcontext.Coupons.Add(c);
                        theTipTopcontext.SaveChanges();

                    }
                }

                for (int i = 0; i < 1500 * 0.10; i++)
                {
                    f = random.Next(1000000000);



                    var c = new Coupon() { CodeCoupon = f, DateCreation = DateTime.Now, DateFin = DateTime.Parse(DateTime.Now.AddMonths(1).ToString()), Etat = "Non distribué", Idlot = 4 };


                    var find = theTipTopcontext.Coupons.Where(c => c.CodeCoupon != f);
                    if (find != null)
                    {
                        theTipTopcontext.Coupons.Add(c);
                        theTipTopcontext.SaveChanges();

                    }
                }
                for (int i = 0; i < 1500 * 0.06; i++)
                {
                    f = random.Next(1000000000);



                    var c = new Coupon() { CodeCoupon = f, DateCreation = DateTime.Now, DateFin = DateTime.Parse(DateTime.Now.AddMonths(1).ToString()), Etat = "Non distribué", Idlot = 5 };


                    var find = theTipTopcontext.Coupons.Where(c => c.CodeCoupon != f);
                    if (find != null)
                    {
                        theTipTopcontext.Coupons.Add(c);
                        theTipTopcontext.SaveChanges();

                    }
                }
                for (int i = 0; i < 1500 * 0.04; i++)
                {
                    f = random.Next(1000000000);



                    var c = new Coupon() { CodeCoupon = f, DateCreation = DateTime.Now, DateFin = DateTime.Parse(DateTime.Now.AddMonths(1).ToString()), Etat = "Non distribué", Idlot = 6 };


                    var find = theTipTopcontext.Coupons.Where(c => c.CodeCoupon != f);
                    if (find != null)
                    {
                        theTipTopcontext.Coupons.Add(c);
                        theTipTopcontext.SaveChanges();

                    }
                }

            }




            return Ok("Bien généré");

        }


        //statistique

       // [Authorize]
        [ActionName("StatistiqueTicket")]
        [Route("StatistiqueTicket")]
        [HttpGet]
        public IActionResult statistiquesTickets()
        {
            List<Statistique> list = new List<Statistique>();


            var coupon = theTipTopcontext.Coupons.ToList();

            var Destribue = (from c in coupon where c.Etat == "Distribué" select c).ToList().Count();
            var NonDestribue = (from c in coupon where c.Etat == "Non distribué" select c).ToList().Count();
            var GainaRecuperer = (from c in coupon where c.Etat == "Gain à Récupérer" select c).ToList().Count();
            var GainRecupere = (from c in coupon where c.Etat == "Gain Récupéré" select c).ToList().Count();



            var rest = new { Destribue = Destribue, NonDestribue = NonDestribue, GainaRecuperer = GainaRecuperer, GainRecupere = GainRecupere };





            return Ok(rest);
        }
        //[Authorize]
        [ActionName("StatistiqueTicket")]
        [Route("statistiquesGainParClient")]
        [HttpGet]
        public IActionResult statistiquesGainParClient()
        {
            List<Statistique> list = new List<Statistique>();


            var coupon = theTipTopcontext.Coupons.ToList();
            var lots = theTipTopcontext.Lots.ToList();

            for (int i = 0; i < lots.Count; i++)
            {
                for (int j = 0; j < coupon.Count; j++)
                {

                    if (lots[i].Idlot == coupon[j].Idlot)
                    {



                    }


                }



            }

            var liststatistique = from L in lots join C in coupon on L.Idlot equals C.Idlot where C.Etat == "Distribué" select new { Count = L.NomLot, };

            return Ok(liststatistique);
        }



        //[Authorize]
        //[ActionName("StatistiqueTicket")]
        //[Route("statistiquesGainParClient")]
        //[HttpGet]
        //public IActionResult statistiquesGainParClient()
        //{
        //    List<Statistique> list = new List<Statistique>();

        //    return Ok("");
        //}





        [Route("AjouterUtilisateur")]
        [HttpPost]
        public async Task<IActionResult> AjouterUtilisateur(Register applicationUser)
        {
            string text = "";
            ApplicationUser User = new ApplicationUser()
            {
                Nom = applicationUser.Nom,
                Prenom = applicationUser.Prenom,
                Email = applicationUser.Email,
                UserName = applicationUser.Email,
                Adresse = applicationUser.Adresse,
                CodePostal = applicationUser.CodePostal,
                Ville = applicationUser.Ville
            };

            var mdptemp = Guid.NewGuid().ToString() + "N4";

            var res = await _userManager.CreateAsync(User, mdptemp);
            await _userManager.AddToRoleAsync(User, applicationUser.Role);

            if (res.Succeeded)
            {
                text = User.Nom + "Est bien Ajouté";
            }
            else
            {
                text = res.Errors.ToList()[0].Description.ToString();

                return Ok(text);
            }


            return Ok(new { message = text, user = User.Email, password = mdptemp });
        }

        [Route("ListClient")]
        [HttpGet]
        public IActionResult GetCLient()
        {

            var list = new List<Client>();
            var user = theTipTopcontext.Users.ToList();
            var role = theTipTopcontext.Roles.ToList();
            var userrole = theTipTopcontext.UserRoles.ToList();


            var clientroles = (from U in user
                               join UR in userrole on U.Id equals UR.UserId
                               join R in role on UR.RoleId equals R.Id
                               select new { Users = U, role = R.Name }).ToList();

            foreach (var clientrole in clientroles)
            {

                list.Add(new Client()
                {
                    Nom = clientrole.Users.Nom,
                    Prenom = clientrole.Users.Prenom,
                    Adresse = clientrole.Users.Adresse,
                    Email = clientrole.Users.Email,
                    Telephone = clientrole.Users.PhoneNumber,
                    CodePostal = clientrole.Users.CodePostal,
                    Ville = clientrole.Users.Ville,
                    Pays = clientrole.Users.Pays,
                    Role = clientrole.role

                });


            }
            return Ok(list);
        }


        [Route("ModifierRoleUtilisateur")]
        [HttpPost]
        public IActionResult ListGet(string Email, string rolename)
        {
            var client = _userManager.FindByEmailAsync(Email).Result;

            var role = theTipTopcontext.Roles.ToList().FirstOrDefault(x => x.Name == rolename);
            _userManager.AddToRoleAsync(client, role.Name);

            RoleUser roleUser = new RoleUser() { Email = client.Email, Roles = role.Name, Success = true };

            return Ok(roleUser);


        }
        [Route("SupprimerClient")]
        [HttpDelete]

        public async Task<IActionResult> DeleteCUser(string email)
        {
            var user = theTipTopcontext.Users.FirstOrDefault(x => x.Email == email);

            if (user == null)
            {

                return NotFound();

            }

            await _userManager.DeleteAsync(user);






            return Ok("le compte bien été supprimé");
        }



        //[Authorize]
        [Route("ListGetRoleUsers")]
        [HttpGet]
        public IActionResult ListGetRoleUsers(string Email)
        {
            List<RoleUser> roleUsers = new List<RoleUser>();
            List<string> roles = new List<string>();
            var client = _userManager.FindByEmailAsync(Email).Result;

            var role = theTipTopcontext.UserRoles.ToList().Where(x => x.UserId == client.Id);



            foreach (var r in role)
            {
                foreach (var s in theTipTopcontext.Roles)
                {
                    if (s.Id == r.RoleId)
                    {

                        roles.Add(s.Name);


                    }


                }

            }









            return Ok(new { roleUsers });
        }



    }
}
