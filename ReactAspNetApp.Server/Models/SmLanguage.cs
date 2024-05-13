using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmLanguage
{
    public string LangKey { get; set; } = null!;

    public string LangName { get; set; } = null!;

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int SystemStatus { get; set; }

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;
}
