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

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int SystemStatus { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<BdcFacility> BdcFacilities { get; set; } = new List<BdcFacility>();

    public virtual SmCity City { get; set; } = null!;

    public virtual SmCountry Country { get; set; } = null!;

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual ICollection<BdcOrgUnit> InverseParentOrgUnit { get; set; } = new List<BdcOrgUnit>();

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;

    public virtual BdcOrgUnit? ParentOrgUnit { get; set; }
}
