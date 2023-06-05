using API;
using API.Models;
using API.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace TestThetiptop
{
    public class TestUnitaires
    {

        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration configuration;

        private static DbContextOptions<ThetiptoptestContext> conext = new DbContextOptionsBuilder<ThetiptoptestContext>().UseInMemoryDatabase(databaseName: "ApiThetiptop").Options;

        ThetiptoptestContext context;

        public TestUnitaires()
        {
            context = new ThetiptoptestContext(conext);

        }




        [Fact]
        public void Test_Historique()
        {

            var check = new HistoriquesController(context);

            var res = check.Historique() as OkObjectResult;


            Assert.Null(res);
            //Assert.Equal(StatusCodes.Status200OK, res.StatusCode);


        }





        [Fact]

        public void Test_GetTickets()
        {

            var Ticket = new TicketController(context);


            var res = Ticket.Ticket();


            Assert.NotEmpty(res.Idcoupon.ToString());
            Assert.NotNull(res);


        }

        [Fact]

        public void Test_Generer_Ticket()
        {
            var admin = new AdminController(context, _signInManager, _userManager, configuration);

            var res = admin.CreationTickit();


            Assert.NotNull(res);








        }

        //[Fact]

        //public void Test_Huissier()
        //{
        //    var hussier = new HuissierController(context);

        //    var res = hussier.HuissierCheck() as OkObjectResult;


        //    Assert.Fail("test");


        //}

      //  [Fact]

      //  public void Test_Participer()
      //  {
      //      var client = new ClientController(context);

      //      var rest = client.Participer(105, "test@test.com") as OkObjectResult;

       //     Assert.Equal("code introuvable", rest.Value.ToString());
       //     Assert.Equal(StatusCodes.Status200OK, rest.StatusCode);


       // }





        [Fact]

        public void Test_Creation_Tickit()
        {
            var admin = new AdminController(context, _signInManager, _userManager, configuration);

            var res = admin.CreationTickit() as OkObjectResult;

            Assert.NotNull(res);
            Assert.Equal("Bien généré", res.Value.ToString());
            Assert.Equal(StatusCodes.Status200OK, res.StatusCode);




        }


        [Fact]
        public void Test_Statistique_Ticket()
        {
            var statistuque = new AdminController(context, _signInManager, _userManager, configuration);

            var res = statistuque.statistiquesTickets() as OkObjectResult;


            Assert.NotNull(res.Value);
            Assert.Equal(StatusCodes.Status200OK, res.StatusCode);




        }


        [Fact]
        public void Test_Statistiques_Gain_Par_Client()
        {
            var statistuque = new AdminController(context, _signInManager, _userManager, configuration);

            var res = statistuque.statistiquesGainParClient() as OkObjectResult;


            Assert.NotNull(res.Value);
            Assert.Equal(StatusCodes.Status200OK, res.StatusCode);




        }


        [Fact]

        public void Test_Get_CLient()

        {
            var statistuque = new AdminController(context, _signInManager, _userManager, configuration);

            var res = statistuque.GetCLient() as OkObjectResult;


            Assert.NotNull(res.Value);
            Assert.Equal(StatusCodes.Status200OK, res.StatusCode);

        }

        // Add test

        [Fact]
        public void Test_Add_Lot()

        {
         //ARRANGE
        

          // act
         
            //assert

        }



        [Fact]
        public void Test_Get_Lots()

        {
            //ARRANGE
            var  meslots = new LotsController(context);
            
            // act
            var lotsList =  meslots.GetLots().Result;
            
            //assert
           Assert.NotNull(lotsList);
        }


        [Fact]
        public void Test_Add_User()

        {
        
                        
                   
                    
        }






    }
}
