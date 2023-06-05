////using APITheTipTop.Controllers;
//using API;
//using API.Controllers;
//using API.Models;
//using Microsoft.AspNetCore;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Mvc.Testing;
//using Microsoft.AspNetCore.TestHost;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.Options;
//using Moq;
//using Newtonsoft.Json;
//using System;
//using System.Collections.Generic;
//using System.Dynamic;
//using System.Net;
//using System.Net.Http;
//using System.Net.Http.Headers;
//using System.Threading.Tasks;
//using Xunit;
//using Xunit.Abstractions;

//namespace TestThetiptop
//{
//    public class UnitTestAPI : IClassFixture<CustomWebApplicationFactory<Startup>>
//    {
//        private readonly ITestOutputHelper _output;
//        private readonly HttpClient testclient;
//        private readonly CustomWebApplicationFactory<Startup> _factory;
//        private readonly ThetiptoptestContext thetiptoptestContext;
//        protected UnitTestAPI()
//        {
//            var appFactory = new WebApplicationFactory<Startup>().WithWebHostBuilder(b =>
//            {
//                //b.ConfigureServices(s =>
//                //{
//                //    s.AddDbContext<thetiptopContext>(o => { o.UseInMemoryDatabase("") });
//                //});


//            });
//            testclient = appFactory.CreateClient();

//        }

//        //GetJWT

//        //public async Task<string> Getjwt()
//        //{


//        //}
//        //auth
//        //public async Task Auth()
//        //{
//        //    testclient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", await Getjwt());

//        //}
//        public UnitTestAPI(CustomWebApplicationFactory<Startup> factory, ITestOutputHelper output)
//        {
//            _factory = factory;
//            _output = output;
//        }

//        [Fact]
//        //GetToken
//        public async Task Test_Get_Token()
//        {
//            //url
//            var url = "/api/User/authenticate";
//            dynamic data = GetCustomerToken();
//            // Arrange
//            var client = _factory.CreateClient();
//          //  client.SetFakeBearerToken((object)data);
//            // Act
//            var response = await client.GetAsync(url);
//            _output.WriteLine(await response.Content.ReadAsStringAsync());
//            // Assert
//            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
//        }

//        [Fact]
//        //Test GET Lots
//        public async Task Test_Get_Tickit()
//        {
//            //url
//            var url = "/api/Api/Ticket";
//            dynamic data = GetCustomerToken();
//            // Arrange
//            var client = _factory.CreateClient();
//           // client.SetFakeBearerToken((object)data);
//            // Act
//            var response = await client.GetAsync(url);
//            _output.WriteLine(await response.Content.ReadAsStringAsync());
//            // Assert
//            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
//        }

//        [Fact]
//        //Test GET Lots ByID
//        public async Task Test_Get_Lots_ByID()
//        {
//            dynamic data = GetCustomerToken();

//            //HelloContext thetiptoptestContext = new HelloContext();
//            //var lot = thetiptoptestContext.Lots.FindAsync(1);
//            //var Tickit = new LotsController(thetiptoptestContext).GetLot(1);
//            //Assert.Contains(Tickit, c => c == lot);

//        }

//        [Fact]
//        public void Test_POST_Lots()
//        {
//            var Lot = new Lot() { NomLot = "Thé", DescriptionLot = "Thé" };
//          //  ThetiptoptestContext thetiptoptestContext = new ThetiptoptestContext();

//            thetiptoptestContext.Lots.Add(Lot);
//            thetiptoptestContext.SaveChanges();

//            Assert.NotNull(Lot);
//            Assert.Equal(Lot, Lot);

//        }
//        //Test POST lot


       
//        //Get Coupon 
//        [Fact]
//        public void Test_GET_Coupon()
//        {
         
//            var coupons = thetiptoptestContext.Coupons;

//        }
//        private static dynamic GetCustomerToken()
//        {
//            dynamic data = new ExpandoObject();
//            data.sub = "bc29cfa0-3d09-4d8c-9481-2e8c0eb1aa6c";
//            data.extension_UserRole = "Customer";
//            data.extension_UserType = "Customer";
//            return data;
//        }

      
//    }
//}
