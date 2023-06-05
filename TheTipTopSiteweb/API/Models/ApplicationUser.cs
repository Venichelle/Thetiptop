using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace API
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
    
        [PersonalData]
        [MinLength(2)]
        [Required(ErrorMessage = "Ce champ est obligatoire")]
        [Column(TypeName = "nvarchar(250)")]
        public string Nom { get; set; }

        [PersonalData]
        [Column(TypeName = "nvarchar(200)")]
        public string Prenom { get; set; }

        [PersonalData]
        [Display(Name = "Date de naissance"), DataType(DataType.Date)]
        public DateTime? Datenaissance { get; set; }

        [PersonalData]
        [Column(TypeName = "nvarchar(250)")]
        public string Adresse { get; set; }

        [PersonalData]
        [Display(Name = "Code postal"), DataType(DataType.PostalCode)]
        public string CodePostal { get; set; }

        [PersonalData]
        [Column(TypeName = "nvarchar(250)")]
        public string Ville { get; set; }


        [PersonalData]
        [Column(TypeName = "nvarchar(250)")]
        public string Pays { get; set; }

        [Display(Name = "Full Name")]
        public string FullName
        {
            get
            {
                return Nom + ", " + Prenom;
            }
        }
    }
}
