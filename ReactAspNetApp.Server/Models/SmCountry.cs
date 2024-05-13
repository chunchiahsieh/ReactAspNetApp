using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmCountry
{
    public int CountryId { get; set; }

    public string CountryCode { get; set; } = null!;

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int SystemStatus { get; set; }

    public string? ThreeDigitalCode { get; set; }

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactors { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcFacility> BdcFacilities { get; set; } = new List<BdcFacility>();

    public virtual ICollection<BdcOrgGroupProfile> BdcOrgGroupProfiles { get; set; } = new List<BdcOrgGroupProfile>();

    public virtual ICollection<BdcOrgUnit> BdcOrgUnits { get; set; } = new List<BdcOrgUnit>();

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual ICollection<SmOrgGroup> SmOrgGroups { get; set; } = new List<SmOrgGroup>();
}
