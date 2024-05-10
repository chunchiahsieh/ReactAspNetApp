using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmRolePermission
{
    public int RolePermissionId { get; set; }

    public int OrgGroupId { get; set; }

    public string RoleName { get; set; } = null!;

    public string? Permission { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int SystemStatus { get; set; }
}
