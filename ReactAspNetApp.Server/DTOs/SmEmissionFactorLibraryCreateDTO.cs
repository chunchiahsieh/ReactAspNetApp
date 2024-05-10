using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmEmissionFactorLibraryCreateDTO
{
    public int EmissionFactorLibraryId { get; set; }

    public int OrgGuorpId { get; set; }

    public string EmissionFactorLibraryName { get; set; } = null!;

    public string LibraryType { get; set; } = null!;

    public string? DocRef { get; set; }

    public string? LastName { get; set; }

    public string? OriginCorrelationId { get; set; }

    public string? Year { get; set; }

    public string? Version { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string ConfigurationType { get; set; } = null!;

    public string SystemStatus { get; set; } = null!;
    public virtual SmUserRawDTO? User { get; set; } = null!;
}

public class CreateDTO2SmEmissionFactorLibraryProfile : Profile
{
    public CreateDTO2SmEmissionFactorLibraryProfile()
    {
        CreateMap<SmEmissionFactorLibraryCreateDTO, SmEmissionFactorLibrary>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}