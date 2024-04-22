using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class RefreshToken
{
    public int RefreshTokenId { get; set; }

    public int? UserId { get; set; }

    public string? RefreshToken1 { get; set; }

    public DateTime? ExpirationTime { get; set; }

    public DateTime? CreatedOn { get; set; }
}
