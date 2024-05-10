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

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int SystemStatus { get; set; }

    public virtual ICollection<BdcArVersion> BdcArVersionCreateBies { get; set; } = new List<BdcArVersion>();

    public virtual ICollection<BdcArVersion> BdcArVersionModifiedBies { get; set; } = new List<BdcArVersion>();

    public virtual ICollection<BdcFacility> BdcFacilityCreateBies { get; set; } = new List<BdcFacility>();

    public virtual ICollection<BdcFacility> BdcFacilityModifiedBies { get; set; } = new List<BdcFacility>();

    public virtual ICollection<BdcGreenhouseGa> BdcGreenhouseGaCreatedBies { get; set; } = new List<BdcGreenhouseGa>();

    public virtual ICollection<BdcGreenhouseGa> BdcGreenhouseGaModifiedBies { get; set; } = new List<BdcGreenhouseGa>();

    public virtual ICollection<BdcOrgGroupProfile> BdcOrgGroupProfileCreateBies { get; set; } = new List<BdcOrgGroupProfile>();

    public virtual ICollection<BdcOrgGroupProfile> BdcOrgGroupProfileModifiedBies { get; set; } = new List<BdcOrgGroupProfile>();

    public virtual ICollection<BdcOrgUnit> BdcOrgUnitCreateBies { get; set; } = new List<BdcOrgUnit>();

    public virtual ICollection<BdcOrgUnit> BdcOrgUnitModifiedBies { get; set; } = new List<BdcOrgUnit>();

    public virtual ICollection<BdcReportingPeriod> BdcReportingPeriodCreateBies { get; set; } = new List<BdcReportingPeriod>();

    public virtual ICollection<BdcReportingPeriod> BdcReportingPeriodModifiedBies { get; set; } = new List<BdcReportingPeriod>();

    public virtual ICollection<BdcReportingYear> BdcReportingYearCreateBies { get; set; } = new List<BdcReportingYear>();

    public virtual ICollection<BdcReportingYear> BdcReportingYearModifiedBies { get; set; } = new List<BdcReportingYear>();

    public virtual ICollection<BdcTransportationDistance> BdcTransportationDistanceCreatedBies { get; set; } = new List<BdcTransportationDistance>();

    public virtual ICollection<BdcTransportationDistance> BdcTransportationDistanceModifiedBies { get; set; } = new List<BdcTransportationDistance>();

    public virtual ICollection<BdcUnit> BdcUnitCreatedBies { get; set; } = new List<BdcUnit>();

    public virtual ICollection<BdcUnitLibrary> BdcUnitLibraryCreatedBies { get; set; } = new List<BdcUnitLibrary>();

    public virtual ICollection<BdcUnitLibrary> BdcUnitLibraryModifiedBies { get; set; } = new List<BdcUnitLibrary>();

    public virtual ICollection<BdcUnit> BdcUnitModifiedBies { get; set; } = new List<BdcUnit>();

    public virtual ICollection<SmChoice> SmChoiceCreateBies { get; set; } = new List<SmChoice>();

    public virtual ICollection<SmChoice> SmChoiceModifiedBies { get; set; } = new List<SmChoice>();

    public virtual ICollection<SmCity> SmCityCreateBies { get; set; } = new List<SmCity>();

    public virtual ICollection<SmCity> SmCityModifiedBies { get; set; } = new List<SmCity>();

    public virtual ICollection<SmCountry> SmCountryCreateBies { get; set; } = new List<SmCountry>();

    public virtual ICollection<SmCountry> SmCountryModifiedBies { get; set; } = new List<SmCountry>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorCreateBies { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactorLibrary> SmEmissionFactorLibraryCreateBies { get; set; } = new List<SmEmissionFactorLibrary>();

    public virtual ICollection<SmEmissionFactorLibrary> SmEmissionFactorLibraryModifiedBies { get; set; } = new List<SmEmissionFactorLibrary>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorModifiedBies { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmLanguage> SmLanguageCreateBies { get; set; } = new List<SmLanguage>();

    public virtual ICollection<SmLanguage> SmLanguageModifiedBies { get; set; } = new List<SmLanguage>();

    public virtual ICollection<SmOrgGroup> SmOrgGroupCreateBies { get; set; } = new List<SmOrgGroup>();

    public virtual ICollection<SmOrgGroup> SmOrgGroupModifiedBies { get; set; } = new List<SmOrgGroup>();

    public virtual ICollection<SmPermission> SmPermissionCreateBies { get; set; } = new List<SmPermission>();

    public virtual ICollection<SmPermission> SmPermissionModifiedBies { get; set; } = new List<SmPermission>();

    public virtual ICollection<SmRole> SmRoleCreateBies { get; set; } = new List<SmRole>();

    public virtual ICollection<SmRole> SmRoleModifiedBies { get; set; } = new List<SmRole>();
}
