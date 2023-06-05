using System;
using System.Collections.Generic;

#nullable disable

namespace API
{
    public partial class Coupon
    {
        public int Idcoupon { get; set; }
        public int? CodeCoupon { get; set; }
        public DateTime DateCreation { get; set; }
        public string DateJeu { get; set; }
        public string DateRecuperation { get; set; }
        public DateTime DateFin { get; set; }
        public string UserId { get; set; }
        public int? Idlot { get; set; }
        public string Etat { get; set; }
    }
}
