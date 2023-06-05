using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace API.Controllers
{

    [ApiController]
    public class AuthentificationController : ControllerBase
    {
        private readonly ThetiptoptestContext thetiptoptestContext;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration configuration;
        private readonly ThetiptoptestContext theTipTopcontext;

        private readonly RoleManager<IdentityRole> _roleManager;

        public AuthentificationController(UserManager<ApplicationUser> um, IConfiguration c, ThetiptoptestContext t, RoleManager<IdentityRole> r, ThetiptoptestContext theTipTopcontext)
        {
            this.theTipTopcontext = theTipTopcontext;
            this.thetiptoptestContext = t;
            this._userManager = um;
            this._roleManager = r;
            this.configuration = c;
        }



        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(Auth Auth)
        {
            string to = "";
            var Usercheck = await _userManager.FindByEmailAsync(Auth.Email);
            if (Usercheck == null)
            {
                return NotFound("Utilisateur non trouvé");
            }
            var res = await _userManager.CheckPasswordAsync(Usercheck, Auth.Motdepasse);

            var userrole = await _userManager.GetRolesAsync(Usercheck);
            //to= generateJwtToken(Usercheck);
            var authClaim = new List<Claim>
                {
                    new Claim(ClaimTypes.Name,Usercheck.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),

                };
            foreach (var d in userrole)
            {

                authClaim.Add(new Claim(ClaimTypes.Role, d));


            }

            var authSigninKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(

                issuer: configuration["JWT:ValidIssuer"],
                audience: configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaim,
                signingCredentials: new SigningCredentials(authSigninKey, SecurityAlgorithms.HmacSha256)

                );
            to = new JwtSecurityTokenHandler().WriteToken(token);




            return Ok(new { token = to, User = Usercheck.Email, role = userrole[0].ToString(), Nom = Usercheck.Nom, Prenom = Usercheck.Prenom });
        }

        [HttpPost]
        [Route("LoginV1")]
        public async Task<IActionResult> LoginV1(Auth Auth)
        {
            string to = "";
            var Usercheck = await _userManager.FindByEmailAsync(Auth.Email);

            if (Usercheck==null)
            {
                return NotFound();
            }

            var res = await _userManager.CheckPasswordAsync(Usercheck, Auth.Motdepasse);

            var userrole = await _userManager.GetRolesAsync(Usercheck);
            //to= generateJwtToken(Usercheck);
            var authClaim = new List<Claim>
                {
                    new Claim(ClaimTypes.Name,Usercheck.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),

                };
            foreach (var d in userrole)
            {

                authClaim.Add(new Claim(ClaimTypes.Role, d));


            }

            var authSigninKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(

                issuer: configuration["JWT:ValidIssuer"],
                audience: configuration["JWT:ValidAudience"],
                expires: DateTime.Now.AddHours(3),
                claims: authClaim,
                signingCredentials: new SigningCredentials(authSigninKey, SecurityAlgorithms.HmacSha256)

                );
            to = new JwtSecurityTokenHandler().WriteToken(token);




            return Ok(new { token = to, User = Usercheck.Email, role = userrole[0].ToString(), Nom = Usercheck.Nom, Prenom = Usercheck.Prenom });
        }



        [HttpGet]
        [Route("ListClient")]
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



        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> register(Register register)
        {
            IdentityResult res = null;

            if (!await _roleManager.RoleExistsAsync("admin"))
            {
                await _roleManager.CreateAsync(new IdentityRole("admin"));
                await _roleManager.CreateAsync(new IdentityRole("admin"));
            }
            if (!await _roleManager.RoleExistsAsync("client"))
            {
                await _roleManager.CreateAsync(new IdentityRole("client"));

            }
            if (!await _roleManager.RoleExistsAsync("Employé"))
            {
                await _roleManager.CreateAsync(new IdentityRole("Employe"));

            }
            if (!await _roleManager.RoleExistsAsync("huissier"))
            {
                await _roleManager.CreateAsync(new IdentityRole("huissier"));

            }
            ApplicationUser applicationUser = new ApplicationUser()
            {
                Nom = register.Nom,
                Prenom = register.Prenom,
                Email = register.Email,
                UserName = register.Email,
                Adresse = register.Adresse,
                CodePostal = register.CodePostal,
                Ville = register.Ville,
                Pays = register.Pays
            };




            if (thetiptoptestContext.Users.Count() == 0)
            {
                await _userManager.CreateAsync(applicationUser, register.Password);
                await _userManager.AddToRoleAsync(applicationUser, "admin");
            }
            else
            {
                res = await _userManager.CreateAsync(applicationUser, register.Password);
                await _userManager.AddToRoleAsync(applicationUser, "client");

            }






            return Ok(res);
        }







    }
}
