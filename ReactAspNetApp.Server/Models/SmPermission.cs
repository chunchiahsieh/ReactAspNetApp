using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmPermission
{
    public int PermissionId { get; set; }

    public int OrgGroupId { get; set; }

    public string PermissionName { get; set; } = null!;

    public int FunctionId { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int SystemStatus { get; set; }

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;
}
