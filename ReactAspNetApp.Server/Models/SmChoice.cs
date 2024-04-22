using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmChoice
{
    public int ChoiceId { get; set; }

    public string ChoiceValue { get; set; } = null!;

    public string Category { get; set; } = null!;

    public string LangKey { get; set; } = null!;

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string SystemStatus { get; set; } = null!;

    public virtual SmUser CreateBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;
}
