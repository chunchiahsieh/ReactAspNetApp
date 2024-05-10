using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmEmissionFactorLibrary
{
    public int EmissionFactorLibraryId { get; set; }

    public int OrgGroupId { get; set; }

    public string EmissionFactorLibraryName { get; set; } = null!;

    public int LibraryType { get; set; }

    public string? DocRef { get; set; }

    public string? LastName { get; set; }

    public string? OriginCorrelationId { get; set; }

    public string? Year { get; set; }

    public string? Version { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int ConfigurationType { get; set; }

    public int SystemStatus { get; set; }

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
