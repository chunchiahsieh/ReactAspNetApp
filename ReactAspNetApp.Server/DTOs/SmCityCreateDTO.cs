using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmCityCreateDTO
{
    public int CountryId { get; set; }

    public string? ZipPostalCode { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }
}

public class CreateDTOSmCityProfile : AutoMapper.Profile
{
    public CreateDTOSmCityProfile()
    {
        CreateMap<SmCityCreateDTO, SmCity>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}
