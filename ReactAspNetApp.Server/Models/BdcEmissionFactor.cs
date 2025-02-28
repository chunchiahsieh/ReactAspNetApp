﻿using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcEmissionFactor
{
    public int EmissionFactorId { get; set; }

    public int OrgGroupId { get; set; }

    public int EmissionFactorLibraryId { get; set; }

    public string EmissionFactorName { get; set; } = null!;

    public string? Description { get; set; }

    public string EmissionFactorSource { get; set; } = null!;

    public string? EmissionFactorSourceRemark { get; set; }

    public string EmissionFactorCategory { get; set; } = null!;

    public int? CountryId { get; set; }

    public int UnitId { get; set; }

    public bool IsBiofuel { get; set; }

    public string? DocRef { get; set; }

    public string? OriginCorrelationId { get; set; }

    public string? Year { get; set; }

    public string? Version { get; set; }

    public string? Remark { get; set; }

    public decimal? Co2 { get; set; }

    public int? Co2UnitId { get; set; }

    public decimal? Ch4 { get; set; }

    public int? Ch4UnitId { get; set; }

    public decimal? N2o { get; set; }

    public int? N2oUnitId { get; set; }

    public decimal? Hfcs { get; set; }

    public int? HfcsUnitId { get; set; }

    public decimal? Pcfs { get; set; }

    public int? PcfsUnitId { get; set; }

    public decimal? Sf6 { get; set; }

    public int? Sf6UnitId { get; set; }

    public decimal? Nf3 { get; set; }

    public int? Nf3UnitId { get; set; }

    public decimal? OtherGhgs { get; set; }

    public int? GhgsUnitId { get; set; }

    public decimal? Co2e { get; set; }

    public int? Co2eUnitId { get; set; }

    public decimal? BiogenicCo2Factor { get; set; }

    public int? BiogenicCo2FactorId { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int ConfigurationType { get; set; }

    public int SystemStatus { get; set; }

    public virtual BdcUnit? BiogenicCo2FactorNavigation { get; set; }

    public virtual BdcUnit? Ch4Unit { get; set; }

    public virtual BdcUnit? Co2Unit { get; set; }

    public virtual BdcUnit? Co2eUnit { get; set; }

    public virtual SmCountry? Country { get; set; }

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual BdcUnit? GhgsUnit { get; set; }

    public virtual BdcUnit? HfcsUnit { get; set; }

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual BdcUnit? N2oUnit { get; set; }

    public virtual BdcUnit? Nf3Unit { get; set; }

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;

    public virtual BdcUnit? PcfsUnit { get; set; }

    public virtual BdcUnit? Sf6Unit { get; set; }

    public virtual BdcUnit Unit { get; set; } = null!;
}
