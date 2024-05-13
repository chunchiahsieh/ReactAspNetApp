using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcOrgUnit
{
    public int OrgUnitId { get; set; }

    public int OrgGroupId { get; set; }

    public string OrgUnitName { get; set; } = null!;

    public string OrgType { get; set; } = null!;

    public int? ParentOrgUnitId { get; set; }

    public string? Website { get; set; }

    public string? BusinessRegistrationNo { get; set; }

    public string? StockIdentificationNo { get; set; }

    public int CountryId { get; set; }

    public string? ZipPostalCode { get; set; }

    public int CityId { get; set; }

    public string? Street { get; set; }

    public decimal? Latitude { get; set; }

    public decimal? Longitude { get; set; }

    public string? Remark { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int SystemStatus { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<BdcFacility> BdcFacilities { get; set; } = new List<BdcFacility>();

    public virtual SmCity City { get; set; } = null!;

    public virtual SmCountry Country { get; set; } = null!;

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual ICollection<BdcOrgUnit> InverseParentOrgUnit { get; set; } = new List<BdcOrgUnit>();

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual ICollection<OghgEmployeeCommuting> OghgEmployeeCommutings { get; set; } = new List<OghgEmployeeCommuting>();

    public virtual ICollection<OghgMobileCombustion> OghgMobileCombustionOrgUnits { get; set; } = new List<OghgMobileCombustion>();

    public virtual ICollection<OghgMobileCombustion> OghgMobileCombustionQuantityUnits { get; set; } = new List<OghgMobileCombustion>();

    public virtual ICollection<OghgStationaryCombustion> OghgStationaryCombustionOrgUnits { get; set; } = new List<OghgStationaryCombustion>();

    public virtual ICollection<OghgStationaryCombustion> OghgStationaryCombustionQuantityUnits { get; set; } = new List<OghgStationaryCombustion>();

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;

    public virtual BdcOrgUnit? ParentOrgUnit { get; set; }
}
