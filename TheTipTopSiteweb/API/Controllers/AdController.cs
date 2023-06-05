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

namespace API.Controllers
{

    [ActivatorUtilitiesConstructor]
    [Route("api/[controller]")]
    [ApiController]
    public class AdController: ControllerBase
    {
        private readonly ThetiptoptestContext theTipTopcontext;

        public AdController(ThetiptoptestContext theTipTopcontext)
        {
            this.theTipTopcontext = theTipTopcontext;
           


        }
        [HttpGet]
        [Route("list")]
        
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
    }
}
