using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class BdcUnit
{
    public int UnitId { get; set; }

    public int OrgGroupId { get; set; }

    public string UnitName { get; set; } = null!;

    public int UnitLibraryId { get; set; }

    public decimal ConversionFactor { get; set; }

    public bool? IsBaseUnit { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public int ConfigurationType { get; set; }

    public int SystemStatus { get; set; }

    public virtual ICollection<BdcTransportationDistance> BdcTransportationDistances { get; set; } = new List<BdcTransportationDistance>();

    public virtual ICollection<BdcUnitLibrary> BdcUnitLibraries { get; set; } = new List<BdcUnitLibrary>();

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorBiogenicCo2FactorNavigations { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorCh4Units { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorCo2Units { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorCo2eUnits { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorGhgsUnits { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorHfcsUnits { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorN2oUnits { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorNf3Units { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorPcfsUnits { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorSf6Units { get; set; } = new List<SmEmissionFactor>();

    public virtual ICollection<SmEmissionFactor> SmEmissionFactorUnits { get; set; } = new List<SmEmissionFactor>();

    public virtual BdcUnitLibrary UnitLibrary { get; set; } = null!;
}
