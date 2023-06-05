using API;
using API.Controllers;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Xunit;

namespace TestThetiptop.API
{

    public class ApiTest
    {
        private ThetiptoptestContext thetiptoptestContext;
        private SignInManager<ApplicationUser> _signInManager;
        private UserManager<ApplicationUser> _userManager;
        private IConfiguration configuration;
        private RoleManager<IdentityRole> _roleManager;



        //[Fact]
        //public async void Test_Login_Filed()
        //{
        //    var aut = new Auth();
        //    aut.Email = "mouhcine.ifouls@gmail.com";
        //    aut.Motdepasse = "mouhcine.ifouls@gmail.com";
        //    var authentificationController = new AuthentificationController(_userManager, configuration, thetiptoptestContext, _roleManager);


        //    var val = authentificationController.Login(aut);

        //    object okrest = await val as ObjectResult;
        //    Assert.NotNull(okrest);



        //}
        [Fact]
        public async void Test_Login_Secss()
        {

           

        }
        //Admin
        [Fact]
        public void Test_Admin_GetCLient()
        {



        }


        //client
        [Fact]

        public void Test_Client_Participe()
        {


        }

        [Fact]
        public void Test_Client_Historique()
        {


        }

        //Emplpyer

        [Fact]
        public void Test_Employe_check()
        {

        }

        [Fact]
        public void Test_Employe_validation()
        {


        }

        //Huissier

        [Fact]
        public void Test_Huissier_Tirage()
        {

        }


        [Fact]
        public void Test_Get_Lots()
        {

        }

        [Fact]
        public void Test_Add_Lot()

        {
         
        }

        [Fact]
        public void Test_Add_User()

        {      
                   
                    
        }






    }
}
