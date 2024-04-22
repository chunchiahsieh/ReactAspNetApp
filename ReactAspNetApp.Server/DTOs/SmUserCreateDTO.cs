using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmUserCreateDTO
{
    public int OrgGroupId { get; set; }

    public string Account { get; set; } = null!;

    public string Email { get; set; } = null!;

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

    public string LangKey { get; set; } = null!;

    public string TimeZone { get; set; } = null!;

    public int? CreateById { get; set; }

    public DateTime? CreateOn { get; set; }

    public int? ModifiedById { get; set; }

    public DateTime? ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string? SystemStatus { get; set; } = null!;
}

public class CreateDTO2SmUserProfile: Profile
{
    public CreateDTO2SmUserProfile()
    {
        CreateMap<SmUserCreateDTO, SmUser>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}