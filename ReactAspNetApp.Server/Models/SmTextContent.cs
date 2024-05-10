using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmTextContent
{
    public string TableName { get; set; } = null!;

    public int SourceId { get; set; }

    public string LangKey { get; set; } = null!;

    public string? Description { get; set; }

    public string? Content1 { get; set; }

    public string? Content2 { get; set; }

    public string? Content3 { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int SystemStatus { get; set; }

    public string? Name { get; set; }
}
