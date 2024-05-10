using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmUnitLibrary
{
    public int UnitLibraryId { get; set; }

    public int OrgGroupId { get; set; }

    public string UnitLibraryName { get; set; } = null!;

    public int BaseUnitId { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int ConfigurationType { get; set; }

    public int SystemStatus { get; set; }
}
