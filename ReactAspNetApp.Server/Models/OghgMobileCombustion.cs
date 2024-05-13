using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class OghgMobileCombustion
{
    public int MobileCombustionId { get; set; }

    public int OrgGroupId { get; set; }

    public int OrgUnitId { get; set; }

    public int FacilityId { get; set; }

    public int EmissionSourceId { get; set; }

    public string Name { get; set; } = null!;

    public int Utilization { get; set; }

    public string? UtilizationRemark { get; set; }

    public string? Description { get; set; }

    public int FuelType { get; set; }

    public string? FuelTypeRemark { get; set; }

    public int MethodologyType { get; set; }

    public decimal Quantity { get; set; }

    public int QuantityUnitId { get; set; }

    public DateTime ConsumptionStartDate { get; set; }

    public DateTime ConsumptionEndDate { get; set; }

    public DateTime TransactionDate { get; set; }

    public string? Evidence { get; set; }

    public string? EvidenceUrl { get; set; }

    public int ActivityDataQualityType { get; set; }

    public int ActivityDataConfidenceType { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual BdcFacility Facility { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;

    public virtual BdcOrgUnit OrgUnit { get; set; } = null!;

    public virtual BdcOrgUnit QuantityUnit { get; set; } = null!;
}
