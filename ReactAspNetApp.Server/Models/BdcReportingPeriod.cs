using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcReportingPeriod
{
    public int ReportingPeriodId { get; set; }

    public int OrgGroupId { get; set; }

    public string ReportingPeriodName { get; set; } = null!;

    public DateOnly StartDate { get; set; }

    public DateOnly EndDate { get; set; }

    public string PeriodStatus { get; set; } = null!;

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string ConfigurationType { get; set; } = null!;

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
