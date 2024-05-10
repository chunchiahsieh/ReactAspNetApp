using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmEmissionFactorLibraryUpdateDTO
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

    public int? ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string ConfigurationType { get; set; } = null!;

    public string SystemStatus { get; set; } = null!;
    public virtual SmUserRawDTO? User { get; set; } = null!;

}

public class UpdateDTO2SmEmissionFactorLibraryProfile : Profile
{
    public UpdateDTO2SmEmissionFactorLibraryProfile()
    {
        //注意：由於Update中有些欄位會由原本的 int 改成用 int?，這會導致在進行mapping時，他會先將null轉成0，所以需要用PreCondition特別的處理
        CreateMap<SmEmissionFactorLibraryUpdateDTO, SmEmissionFactorLibrary>()               
        .ForMember(dest => dest.ModifiedById, opt => opt.PreCondition(src => src.ModifiedById.HasValue))
        .ForMember(dest => dest.ModifiedById, opt => opt.MapFrom(src => src.ModifiedById ?? 0))
        .ForAllMembers(opts => opts.Condition(
            (src, dest, srcMember) => srcMember != null
        ));
    }
}