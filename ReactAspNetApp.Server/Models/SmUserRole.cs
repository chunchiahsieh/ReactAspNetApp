using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmUserRole
{
    public int UserRoleId { get; set; }

    public int OrgGroupId { get; set; }

    public int UserId { get; set; }

    public int RoleId { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int SystemStatus { get; set; }
}
