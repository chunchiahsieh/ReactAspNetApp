using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcArVersion
{
    public int ArVersionId { get; set; }

    public int OrgGroupId { get; set; }

    public string ArVersionName { get; set; } = null!;

    public string? DocRef { get; set; }

    public string? OriginCorrelationId { get; set; }

    public string? Year { get; set; }

    public string Version { get; set; } = null!;

    public string? Remark { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int ConfiguartionType { get; set; }

    public int SystemStatus { get; set; }

    public virtual ICollection<BdcGreenhouseGa> BdcGreenhouseGas { get; set; } = new List<BdcGreenhouseGa>();

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
