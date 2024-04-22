using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmOrgGroupUpdateDTO
{
    public string? OrgGroupName { get; set; } = null!;

    public string? VendorCode { get; set; } = null!;

    public string? Website { get; set; }

    public string? BusinessRegistrationNo { get; set; }

    public string? StockIdentificationNo { get; set; }

    public int? CountryId { get; set; }

    public string? ZipPostalCode { get; set; }

    public int? CityId { get; set; }

    public string? Street { get; set; }

    public decimal? Latitude { get; set; }

    public decimal? Longitude { get; set; }

    public string? Remark { get; set; }

    public int? UserId { get; set; }

    public bool? BdcPermission { get; set; }

    public bool? OghgPermission { get; set; }

    public bool? PcfPermission { get; set; }

    public bool? SpmPermission { get; set; }

    public int? ModifiedById { get; set; }

    public DateTime? ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }
    public string? SystemStatus { get; set; } = null!;
    public virtual SmUserRawDTO? User { get; set; } = null!;

}

public class UpdateDTO2SmOrgGroupProfile : Profile
{
    public UpdateDTO2SmOrgGroupProfile()
    {
        //注意：由於Update中有些欄位會由原本的 int 改成用 int?，這會導致在進行mapping時，他會先將null轉成0，所以需要用PreCondition特別的處理
        CreateMap<SmOrgGroupUpdateDTO, SmOrgGroup>()
        .ForMember(dest => dest.CountryId, opt => opt.PreCondition(src => src.CountryId.HasValue))
        .ForMember(dest => dest.CountryId, opt => opt.MapFrom(src => src.CountryId ?? 0))
        .ForMember(dest => dest.CityId, opt => opt.PreCondition(src => src.CityId.HasValue))
        .ForMember(dest => dest.CityId, opt => opt.MapFrom(src => src.CityId ?? 0))
        .ForMember(dest => dest.UserId, opt => opt.PreCondition(src => src.UserId.HasValue))
        .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId ?? 0))
        .ForMember(dest => dest.ModifiedById, opt => opt.PreCondition(src => src.ModifiedById.HasValue))
        .ForMember(dest => dest.ModifiedById, opt => opt.MapFrom(src => src.ModifiedById ?? 0))
        .ForAllMembers(opts => opts.Condition(
            (src, dest, srcMember) => srcMember != null
        ));
    }
}