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

    public int? ImportSequenceNo { get; set; }

    public int ConfigurationType { get; set; }

    public int SystemStatus { get; set; }

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorBiogenicCo2FactorNavigations { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorCh4Units { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorCo2Units { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorCo2eUnits { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorGhgsUnits { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorHfcsUnits { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorN2oUnits { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorNf3Units { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorPcfsUnits { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorSf6Units { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcEmissionFactor> BdcEmissionFactorUnits { get; set; } = new List<BdcEmissionFactor>();

    public virtual ICollection<BdcTransportationDistance> BdcTransportationDistances { get; set; } = new List<BdcTransportationDistance>();

    public virtual ICollection<BdcUnitLibrary> BdcUnitLibraries { get; set; } = new List<BdcUnitLibrary>();

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual ICollection<OghgIndustrialProcess> OghgIndustrialProcessOrgUnits { get; set; } = new List<OghgIndustrialProcess>();

    public virtual ICollection<OghgIndustrialProcess> OghgIndustrialProcessQuantityUnits { get; set; } = new List<OghgIndustrialProcess>();

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;

    public virtual BdcUnitLibrary UnitLibrary { get; set; } = null!;
}
