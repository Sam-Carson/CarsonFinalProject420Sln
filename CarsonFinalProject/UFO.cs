//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CarsonFinalProject
{
    using System;
    using System.Collections.Generic;
    
    public partial class UFO
    {
        public int UFOID { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Shape { get; set; }
        public int YearID { get; set; }
        public string Duration { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    
        public virtual Year Year { get; set; }
    }
}
