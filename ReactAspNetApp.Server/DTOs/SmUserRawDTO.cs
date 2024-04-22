using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmUserRawDTO
{
    public int? UserId { get; set; }

    public int? OrgGroupId { get; set; }

    public string? Account { get; set; } = null!;

    public string? Email { get; set; } = null!;

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? FirstNameEn { get; set; }

    public string? LastNameEn { get; set; }

    public string? Department { get; set; }

    public string? JobTitle { get; set; }

    public string? CompanyNo { get; set; }

    public string? Phone { get; set; }

    public string? Remark { get; set; }

    public string? Password { get; set; } = null!;

    public string? RolePermission { get; set; }

    public bool? IsOrgAdmin { get; set; }

    public bool? IsSuperAdmin { get; set; }

    public string? LangKey { get; set; } = null!;

    public string? TimeZone { get; set; } = null!;

    public int? CreateById { get; set; }

    public DateTime? CreateOn { get; set; }

    public int? ModifiedById { get; set; }

    public DateTime? ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string? SystemStatus { get; set; } = null!;

    // public string OrgGroupName { get; set; } = null!;

}

public class SmUser2RawDTOProfile : Profile
{
    public SmUser2RawDTOProfile()
    {
        //注意：由於Update中有些欄位會由原本的 int 改成用 int?，這會導致在進行mapping時，他會先將null轉成0，所以需要用PreCondition特別的處理
        CreateMap<SmUser, SmUserRawDTO>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}

public class SmUserRawDTO2SmUserProfile : Profile
{
    public SmUserRawDTO2SmUserProfile()
    {
        //注意：由於Update中有些欄位會由原本的 int 改成用 int?, bool 變 bool? 與 DateTime 變 DateTime?，這會導致在進行mapping時，他會先將null轉成0，所以需要用PreCondition特別的處理
        CreateMap<SmUserRawDTO, SmUser>()
        .ForMember(dest => dest.UserId, opt => opt.PreCondition(src => src.UserId.HasValue))
        .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId ?? 0))
        .ForMember(dest => dest.OrgGroupId, opt => opt.PreCondition(src => src.OrgGroupId.HasValue))
        .ForMember(dest => dest.OrgGroupId, opt => opt.MapFrom(src => src.OrgGroupId ?? 0))
        .ForMember(dest => dest.CreateById, opt => opt.PreCondition(src => src.CreateById.HasValue))
        .ForMember(dest => dest.CreateById, opt => opt.MapFrom(src => src.CreateById ?? 0))
        .ForMember(dest => dest.ModifiedById, opt => opt.PreCondition(src => src.ModifiedById.HasValue))
        .ForMember(dest => dest.ModifiedById, opt => opt.MapFrom(src => src.ModifiedById ?? 0))
        .ForMember(dest => dest.ImportSeqnNo, opt => opt.PreCondition(src => src.ImportSeqnNo.HasValue))
        .ForMember(dest => dest.ImportSeqnNo, opt => opt.MapFrom(src => src.ImportSeqnNo ?? 0))
        .ForMember(dest => dest.IsOrgAdmin, opt => opt.PreCondition(src => src.IsOrgAdmin.HasValue))
        .ForMember(dest => dest.IsOrgAdmin, opt => opt.MapFrom(src => src.IsOrgAdmin))
        .ForMember(dest => dest.IsSuperAdmin, opt => opt.PreCondition(src => src.IsSuperAdmin.HasValue))
        .ForMember(dest => dest.IsSuperAdmin, opt => opt.MapFrom(src => src.IsSuperAdmin))
        .ForMember(dest=>dest.CreateOn, opt => opt.PreCondition(src => src.CreateOn.HasValue))
        .ForMember(dest=>dest.CreateOn, opt => opt.MapFrom(src => src.CreateOn ?? DateTime.UtcNow))
        .ForMember(dest=>dest.ModifiedOn, opt => opt.PreCondition(src => src.ModifiedOn.HasValue))
        .ForMember(dest=>dest.ModifiedOn, opt => opt.MapFrom(src => src.ModifiedOn ?? DateTime.UtcNow))
        .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}
