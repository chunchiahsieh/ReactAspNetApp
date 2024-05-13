using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcUnitLibrary
{
    public int UnitLibraryId { get; set; }

    public int OrgGroupId { get; set; }

    public string UnitLibraryName { get; set; } = null!;

    public int? BaseUnitId { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int ConfigurationType { get; set; }

    public int SystemStatus { get; set; }

    public virtual BdcUnit? BaseUnit { get; set; }

    public virtual ICollection<BdcUnit> BdcUnits { get; set; } = new List<BdcUnit>();

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
