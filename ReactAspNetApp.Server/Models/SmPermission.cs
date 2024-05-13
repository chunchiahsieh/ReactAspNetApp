using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmPermission
{
    public int PermissionId { get; set; }

    public int OrgGroupId { get; set; }

    public string PermissionName { get; set; } = null!;

    public int FunctionId { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int SystemStatus { get; set; }

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;
}
