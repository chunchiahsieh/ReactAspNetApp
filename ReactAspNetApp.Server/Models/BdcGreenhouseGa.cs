using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcGreenhouseGa
{
    public int GreenhouseGasId { get; set; }

    public int OrgGroupId { get; set; }

    public int ArVersionId { get; set; }

    public string GreenhouseGasName { get; set; } = null!;

    public string GhgCategory { get; set; } = null!;

    public string MontrealProtocolStatus { get; set; } = null!;

    public bool IsRegrigerantType { get; set; }

    public decimal? GwpFactor { get; set; }

    public string? DocRef { get; set; }

    public string? OriginCorrelationId { get; set; }

    public string? Year { get; set; }

    public string Version { get; set; } = null!;

    public string? Remark { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int ConfigurationType { get; set; }

    public int SystemStatus { get; set; }

    public virtual BdcArVersion ArVersion { get; set; } = null!;

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
