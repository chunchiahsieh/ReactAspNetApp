using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class AccessToken
{
    public int AccessTokenId { get; set; }

    public int? UserId { get; set; }

    public string? AccessToken1 { get; set; }

    public DateTime? ExpirationTime { get; set; }

    public DateTime? CreatedOn { get; set; }
}
