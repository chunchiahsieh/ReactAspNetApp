using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class BdcOrgGroupProfileCreateDTO
{
    public int OrgGroupProfileId { get; set; }

    public int OrgGroupId { get; set; }

    public string OrgGroupProfileName { get; set; } = null!;

    public string? Website { get; set; }

    public string? BusinessRegistrationNo { get; set; }

    public string? StockIdentificationNo { get; set; }

    public int CountryId { get; set; }

    public string? ZipPostalCode { get; set; }

    public int CityId { get; set; }

    public string? Street { get; set; }

    public decimal? Latitude { get; set; }

    public decimal? Longitude { get; set; }

    public string? Remark { get; set; }

    public int CreatedById { get; set; }

    public DateTime CreatedOn { get; set; }

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSequenceNo { get; set; }

    public int SystemStatus { get; set; }

    public virtual SmCity City { get; set; } = null!;

    public virtual SmCountry Country { get; set; } = null!;

    public virtual SmUser CreatedBy { get; set; } = null!;

    public virtual SmUser ModifiedBy { get; set; } = null!;

    public virtual SmOrgGroup OrgGroup { get; set; } = null!;
}

public class CreateDTO2BdcOrgGroupProfile : Profile
{
    public CreateDTO2BdcOrgGroupProfile()
    {
        CreateMap<BdcOrgGroupProfileCreateDTO, BdcOrgGroupProfile>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}