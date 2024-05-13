using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmUser
{
    public int UserId { get; set; }

    public int OrgGroupId { get; set; }

    public string Account { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? FirstNameEn { get; set; }

    public string? LastNameEn { get; set; }

    public string? Department { get; set; }

    public string? JobTitle { get; set; }

    public string? CompanyNo { get; set; }

    public string? Phone { get; set; }

    public string? Remark { get; set; }

    public bool IsOrgAdmin { get; set; }

    public bool IsSuperAdmin { get; set; }

    public string LangKey { get; set; } = null!;

    public string TimeZone { get; set; } = null!;

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int SystemStatus { get; set; }

    public virtual ICollection<BdcArVersion> BdcArVersionCreatedBies { get; set; } = new List<BdcArVersion>();

    public virtual ICollection<BdcArVersion> BdcArVersionModifiedBies { get; set; } = new List<BdcArVersion>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorCreatedBies { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactorLibrary> BdcEmissionFactorLibraryCreatedBies { get; set; } = new List<BdcEmissionFactorLibrary>();

    public virtual ICollection<BdcEmissionFactorLibrary> BdcEmissionFactorLibraryModifiedBies { get; set; } = new List<BdcEmissionFactorLibrary>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorModifiedBies { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcFacility> BdcFacilityCreatedBies { get; set; } = new List<BdcFacility>();

    public virtual ICollection<BdcFacility> BdcFacilityModifiedBies { get; set; } = new List<BdcFacility>();

    public virtual ICollection<BdcGreenhouseGa> BdcGreenhouseGaCreatedBies { get; set; } = new List<BdcGreenhouseGa>();

    public virtual ICollection<BdcGreenhouseGa> BdcGreenhouseGaModifiedBies { get; set; } = new List<BdcGreenhouseGa>();

    public virtual ICollection<BdcOrgGroupProfile> BdcOrgGroupProfileCreatedBies { get; set; } = new List<BdcOrgGroupProfile>();

    public virtual ICollection<BdcOrgGroupProfile> BdcOrgGroupProfileModifiedBies { get; set; } = new List<BdcOrgGroupProfile>();

    public virtual ICollection<BdcOrgUnit> BdcOrgUnitCreatedBies { get; set; } = new List<BdcOrgUnit>();

    public virtual ICollection<BdcOrgUnit> BdcOrgUnitModifiedBies { get; set; } = new List<BdcOrgUnit>();

    public virtual ICollection<BdcReportingPeriod> BdcReportingPeriodCreatedBies { get; set; } = new List<BdcReportingPeriod>();

    public virtual ICollection<BdcReportingPeriod> BdcReportingPeriodModifiedBies { get; set; } = new List<BdcReportingPeriod>();

    public virtual ICollection<BdcReportingYear> BdcReportingYearCreatedBies { get; set; } = new List<BdcReportingYear>();

    public virtual ICollection<BdcReportingYear> BdcReportingYearModifiedBies { get; set; } = new List<BdcReportingYear>();

    public virtual ICollection<BdcTransportationDistance> BdcTransportationDistanceCreatedBies { get; set; } = new List<BdcTransportationDistance>();

    public virtual ICollection<BdcTransportationDistance> BdcTransportationDistanceModifiedBies { get; set; } = new List<BdcTransportationDistance>();

    public virtual ICollection<BdcUnit> BdcUnitCreatedBies { get; set; } = new List<BdcUnit>();

    public virtual ICollection<BdcUnitLibrary> BdcUnitLibraryCreatedBies { get; set; } = new List<BdcUnitLibrary>();

    public virtual ICollection<BdcUnitLibrary> BdcUnitLibraryModifiedBies { get; set; } = new List<BdcUnitLibrary>();

    public virtual ICollection<BdcUnit> BdcUnitModifiedBies { get; set; } = new List<BdcUnit>();

    public virtual ICollection<OghgEmployeeCommuting> OghgEmployeeCommutingCreatedBies { get; set; } = new List<OghgEmployeeCommuting>();

    public virtual ICollection<OghgEmployeeCommuting> OghgEmployeeCommutingModifiedBies { get; set; } = new List<OghgEmployeeCommuting>();

    public virtual ICollection<OghgIndustrialProcess> OghgIndustrialProcessCreatedBies { get; set; } = new List<OghgIndustrialProcess>();

    public virtual ICollection<OghgIndustrialProcess> OghgIndustrialProcessModifiedBies { get; set; } = new List<OghgIndustrialProcess>();

    public virtual ICollection<OghgMobileCombustion> OghgMobileCombustionCreatedBies { get; set; } = new List<OghgMobileCombustion>();

    public virtual ICollection<OghgMobileCombustion> OghgMobileCombustionModifiedBies { get; set; } = new List<OghgMobileCombustion>();

    public virtual ICollection<OghgStationaryCombustion> OghgStationaryCombustionCreatedBies { get; set; } = new List<OghgStationaryCombustion>();

    public virtual ICollection<OghgStationaryCombustion> OghgStationaryCombustionModifiedBies { get; set; } = new List<OghgStationaryCombustion>();

    public virtual ICollection<SmChoice> SmChoiceCreatedBies { get; set; } = new List<SmChoice>();

    public virtual ICollection<SmChoice> SmChoiceModifiedBies { get; set; } = new List<SmChoice>();

    public virtual ICollection<SmCity> SmCityCreatedBies { get; set; } = new List<SmCity>();

    public virtual ICollection<SmCity> SmCityModifiedBies { get; set; } = new List<SmCity>();

    public virtual ICollection<SmCountry> SmCountryCreatedBies { get; set; } = new List<SmCountry>();

    public virtual ICollection<SmCountry> SmCountryModifiedBies { get; set; } = new List<SmCountry>();

    public virtual ICollection<SmLanguage> SmLanguageCreatedBies { get; set; } = new List<SmLanguage>();

    public virtual ICollection<SmLanguage> SmLanguageModifiedBies { get; set; } = new List<SmLanguage>();

    public virtual ICollection<SmOrgGroup> SmOrgGroupCreatedBies { get; set; } = new List<SmOrgGroup>();

    public virtual ICollection<SmOrgGroup> SmOrgGroupModifiedBies { get; set; } = new List<SmOrgGroup>();

    public virtual ICollection<SmPermission> SmPermissionCreatedBies { get; set; } = new List<SmPermission>();

    public virtual ICollection<SmPermission> SmPermissionModifiedBies { get; set; } = new List<SmPermission>();

    public virtual ICollection<SmRole> SmRoleCreatedBies { get; set; } = new List<SmRole>();

    public virtual ICollection<SmRole> SmRoleModifiedBies { get; set; } = new List<SmRole>();
}
