using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcTransportationDistance
{
    public int TransportationDistanceId { get; set; }

    public int OrgGroupId { get; set; }

    public string TransportationDistanceName { get; set; } = null!;

    public string ShipFrom { get; set; } = null!;

    public string ShipTo { get; set; } = null!;

    public int TransportModeId { get; set; }

    public string? TransportModeRemark { get; set; }

    public decimal? Distance { get; set; }

    public int? DistanceUnitId { get; set; }

    public string? EvidenceUrl { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int ImportSequenceNo { get; set; }

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual BdcUnit? DistanceUnit { get; set; }

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}
