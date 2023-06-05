using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Prometheus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {

            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            var serverVersion = new MySqlServerVersion(new Version(8, 0, 21));

            string connectionString = Configuration.GetConnectionString("ApiThetiptop");// "server =127.0.0.1;Port=3307;database=thetiptop;user=root;password=momo";

            services.AddDbContext<ThetiptoptestContext>(

                dbContextOptions => dbContextOptions
              .UseMySql(connectionString, serverVersion)
              .EnableSensitiveDataLogging() // <-- These two calls are optional but help
              .EnableDetailedErrors().EnableServiceProviderCaching()      // <-- with debugging (remove for production).
      );

            services.AddIdentity<ApplicationUser, IdentityRole>().
                AddEntityFrameworkStores<ThetiptoptestContext>().
                AddDefaultTokenProviders();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });

            services.AddAuthentication(o =>
            {
                o.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                o.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            //// Adding Jwt Bearer  
            .AddJwtBearer(options =>
            {
                //options.SaveToken = true;
                //options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {

                    ValidateLifetime = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = Configuration["JWT:ValidAudience"],
                    ValidIssuer = Configuration["JWT:ValidIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                };
            });

            //services.AddCors(options =>
            //{
            //    options.AddPolicy(name: "AllowAll",
            //                      builder =>
            //                      {
            //                          builder.WithOrigins("http://localhost:4200", "http://163.172.37.117:80",
            //                                              "http://prepro.dsp-archiweb020-jb-vm-mi-cb.fr/",
            //                                              "http://devops-dsp-archiweb020-jb-vm-mi-cb.fr/"
            //                                              ).WithMethods("POST", "PUT", "DELETE", "GET").AllowAnyMethod().
            //                                              AllowAnyHeader()
            //                                             .AllowCredentials();

            //                      });
            //});
            services.AddCors();
            services.AddControllers();



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // app.UseCors("AllowAll");
            //if (env.IsDevelopment())
            //{  //ici
                
            //    app.UseDeveloperExceptionPage();
            //    app.UseSwagger();
            //    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            //   // app.UseCors("AllowAll");
            //}

            ////ici
            //if (env.IsProduction())
            //{
    
                //app.UseDeveloperExceptionPage();

            //    app.UseSwagger();
            //    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            //    app.UseHttpsRedirection();

            //    app.UseRouting();
            //app.UseCors("AllowAll");
            //app.UseHttpMetrics();
                
            //    app.UseAuthentication();
            //    app.UseAuthorization();


            //    app.UseEndpoints(endpoints =>
            //    {

            //        endpoints.MapControllers();
            //        endpoints.MapMetrics("/metrics");

            //    });


           //
   
            app.UseDeveloperExceptionPage();

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseHttpMetrics();
            //app.UseCors("AllowAll");
            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true) // allow any origin
                .AllowCredentials()); 

            app.UseAuthentication();
            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapMetrics("/metrics");
            });



        }
    }
}
