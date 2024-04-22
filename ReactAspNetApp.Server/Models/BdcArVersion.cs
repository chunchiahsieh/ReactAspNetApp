﻿using System;
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

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string ConfiguartionType { get; set; } = null!;

    public string SystemStatus { get; set; } = null!;

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
