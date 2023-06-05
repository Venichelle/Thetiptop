using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace API
{
    public partial class ThetiptoptestContext : IdentityDbContext<ApplicationUser>
    {

        public ThetiptoptestContext(DbContextOptions<ThetiptoptestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Coupon> Coupons { get; set; }
        public virtual DbSet<Lot> Lots { get; set; }
        public virtual DbSet<Participation> Participations { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // optionsBuilder.UseMySql("server=127.0.0.1;port=3307;database=theTipTope;user=root;password=momo", Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.13-mariadb"));
                //   optionsBuilder.UseSqlServer("Data Source=DESKTOP-B1SIR3A;Initial Catalog=Hello;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.HasCharSet("latin1")
            //    .UseCollation("latin1_swedish_ci");


            builder.Entity<Coupon>().HasKey(c => c.Idcoupon);
            builder.Entity<Lot>().HasKey(l => l.Idlot);
            builder.Entity<Participation>().HasKey(p => p.Idparticipation);
            builder.Entity<ApplicationUser>().HasKey(a => a.Id);



            base.OnModelCreating(builder);


        }


    }
}
