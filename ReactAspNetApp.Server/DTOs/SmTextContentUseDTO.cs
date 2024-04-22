using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmTextContentUseDTO
{
    public string TableName { get; set; } = null!;

    public int SourceId { get; set; }

    public string LangKey { get; set; } = null!;

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Content1 { get; set; }

    public string? Content2 { get; set; }

    public string? Content3 { get; set; }
}

public class SmTextContent2UseProfile : Profile
{
    public SmTextContent2UseProfile()
    {
        CreateMap<SmTextContent, SmTextContentUseDTO>()
            .ForAllMembers(opt => opt.Condition((src, dest, srcMember) => srcMember != null));
    }
}