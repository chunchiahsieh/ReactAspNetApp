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

    public int PeriodStatus { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int ConfigurationType { get; set; }

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
