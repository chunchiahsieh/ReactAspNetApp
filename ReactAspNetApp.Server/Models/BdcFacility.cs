using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcFacility
{
    public int FacilityId { get; set; }

    public int OrgGroupId { get; set; }

    public int OrgUnitId { get; set; }

    public string FacilityName { get; set; } = null!;

    public string FacilityType { get; set; } = null!;

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

    public virtual SmCity City { get; set; } = null!;

    public virtual SmCountry Country { get; set; } = null!;

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual ICollection<OghgEmployeeCommuting> OghgEmployeeCommutings { get; set; } = new List<OghgEmployeeCommuting>();

    public virtual ICollection<OghgIndustrialProcess> OghgIndustrialProcesses { get; set; } = new List<OghgIndustrialProcess>();

    public virtual ICollection<OghgMobileCombustion> OghgMobileCombustions { get; set; } = new List<OghgMobileCombustion>();

    public virtual ICollection<OghgStationaryCombustion> OghgStationaryCombustions { get; set; } = new List<OghgStationaryCombustion>();

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;

    public virtual BdcOrgUnit OrgUnit { get; set; } = null!;
}
