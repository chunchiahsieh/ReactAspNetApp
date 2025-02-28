﻿using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmChoice
{
    public int ChoiceId { get; set; }

    public string ChoiceValue { get; set; } = null!;

    public string Category { get; set; } = null!;

    public string LangKey { get; set; } = null!;

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int SystemStatus { get; set; }

    public int CanonicalChoiceId { get; set; }

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;
}
