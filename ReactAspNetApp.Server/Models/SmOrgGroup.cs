using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmOrgGroup
{
    public int OrgGroupId { get; set; }

    public string OrgGroupName { get; set; } = null!;

    public string VendorCode { get; set; } = null!;

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

    public int UserId { get; set; }

    public bool BdcPermission { get; set; }

    public bool OghgPermission { get; set; }

    public bool PcfPermission { get; set; }

    public bool SpmPermission { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int SystemStatus { get; set; }

    public virtual ICollection<BdcArVersion> BdcArVersions { get; set; } = new List<BdcArVersion>();

    public virtual ICollection<BdcFacility> BdcFacilities { get; set; } = new List<BdcFacility>();

    public virtual ICollection<BdcGreenhouseGa> BdcGreenhouseGas { get; set; } = new List<BdcGreenhouseGa>();

    public virtual ICollection<BdcOrgGroupProfile> BdcOrgGroupProfiles { get; set; } = new List<BdcOrgGroupProfile>();

    public virtual ICollection<BdcOrgUnit> BdcOrgUnits { get; set; } = new List<BdcOrgUnit>();

    public virtual ICollection<BdcReportingPeriod> BdcReportingPeriods { get; set; } = new List<BdcReportingPeriod>();

    public virtual ICollection<BdcReportingYear> BdcReportingYears { get; set; } = new List<BdcReportingYear>();

    public virtual ICollection<BdcTransportationDistance> BdcTransportationDistances { get; set; } = new List<BdcTransportationDistance>();

    public virtual ICollection<BdcUnitLibrary> BdcUnitLibraries { get; set; } = new List<BdcUnitLibrary>();

    public virtual ICollection<BdcUnit> BdcUnits { get; set; } = new List<BdcUnit>();

    public virtual SmCity City { get; set; } = null!;

    public virtual SmCountry Country { get; set; } = null!;

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual ICollection<SmEmissionFactorLibrary> SmEmissionFactorLibraries { get; set; } = new List<SmEmissionFactorLibrary>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactors { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmRole> SmRoles { get; set; } = new List<SmRole>();
}
