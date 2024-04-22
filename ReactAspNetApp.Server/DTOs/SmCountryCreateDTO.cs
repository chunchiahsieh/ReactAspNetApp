using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmCountryCreateDTO
{
    public string CountryCode { get; set; } = null!;

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }
}

public class CreateDTO2SmCountryProfile: Profile
{
    public CreateDTO2SmCountryProfile()
    {
        CreateMap<SmCountryCreateDTO, SmCountry>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}