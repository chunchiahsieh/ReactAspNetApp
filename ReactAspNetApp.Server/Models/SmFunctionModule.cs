﻿using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmFunctionModule
{
    public int FunctionId { get; set; }

    public string FunctionName { get; set; } = null!;

    public string Module { get; set; } = null!;

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int SystemStatus { get; set; }
}
