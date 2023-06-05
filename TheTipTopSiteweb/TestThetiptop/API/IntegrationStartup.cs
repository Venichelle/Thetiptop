//using API;
//using API.Models;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Mvc.Testing;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.DependencyInjection.Extensions;
//using Microsoft.Extensions.Logging;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net.Http;
//using System.Net.Http.Headers;
//using System.Text;
//using System.Threading.Tasks;

//namespace TestThetiptop
//{
//    public class CustomWebApplicationFactory<TStartup>
//       : WebApplicationFactory<TStartup> where TStartup : class
//    {
//        protected override void ConfigureWebHost(IWebHostBuilder builder)
//        {
//            builder.ConfigureServices(services =>
//            {
//                var descriptor = services.SingleOrDefault(
//                    d => d.ServiceType ==
//                        typeof(DbContextOptions<ThetiptoptestContext>));

//                services.Remove(descriptor);

//                services.AddDbContext<ThetiptoptestContext>(options =>
//                {
//                 //   options.UseInMemoryDatabase("InMemoryDbForTesting");
//                });

//                var sp = services.BuildServiceProvider();

//                using (var scope = sp.CreateScope())
//                {
//                    var scopedServices = scope.ServiceProvider;
//                    var db = scopedServices.GetRequiredService<ThetiptoptestContext>();
//                    var logger = scopedServices
//                        .GetRequiredService<ILogger<CustomWebApplicationFactory<TStartup>>>();

//                    db.Database.EnsureCreated();

//                    try
//                    {
//                        //Utilities.InitializeDbForTests(db);
//                    }
//                    catch (Exception ex)
//                    {
//                        logger.LogError(ex, "An error occurred seeding the " +
//                            "database with test messages. Error: {Message}", ex.Message);
//                    }
//                }
//            });
//        }
//    }




//}
