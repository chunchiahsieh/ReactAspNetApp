using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ReactAspNetApp.Server.Models;

public partial class SmCountryUpdateDTO
{
    public string CountryCode { get; set; } = null!;

    public int? ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public string? SystemStatus { get; set; } = null!;
}

public class UpdateDTOSmCountryProfile : AutoMapper.Profile
{
    public UpdateDTOSmCountryProfile()
    {
        //注意：由於Update中有些欄位會由原本的 int 改成用 int?，這會導致在進行mapping時，他會先將null轉成0，所以需要用PreCondition特別的處理
        CreateMap<SmCountryUpdateDTO, SmCountry>()
        .ForMember(dest => dest.ModifiedById, opt => opt.PreCondition(src => src.ModifiedById.HasValue))
        .ForMember(dest => dest.ModifiedById, opt => opt.MapFrom(src => src.ModifiedById ?? 0))
        .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}
