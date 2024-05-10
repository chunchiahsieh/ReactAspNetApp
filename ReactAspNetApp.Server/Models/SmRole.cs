using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmRole
{
    public int RoleId { get; set; }

    public int OrgGroupId { get; set; }

    public string RoleName { get; set; } = null!;

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int SystemStatus { get; set; }

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
