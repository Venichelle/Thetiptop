using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace API.Repository
{
    public class Admin
    {
        private readonly ThetiptoptestContext theTipTopcontext;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<ApplicationUser> roleManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IConfiguration configuration;


    }
}
