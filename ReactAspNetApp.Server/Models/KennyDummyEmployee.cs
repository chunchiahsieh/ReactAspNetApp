using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class KennyDummyEmployee
{
    public int EmployeeId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public int? Age { get; set; }

    public DateOnly? JoinDate { get; set; }
}
