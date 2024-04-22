using System;
using System.Collections.Generic;
using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmOrgGroupCreateDTO
{
    public string OrgGroupName { get; set; } = null!;

    public string VendorCode { get; set; } = null!;

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

    public int UserId { get; set; }

    public bool BdcPermission { get; set; }

    public bool OghgPermission { get; set; }

    public bool PcfPermission { get; set; }

    public bool SpmPermission { get; set; }

    public int CreateById { get; set; }

    public DateTime CreateOn { get; set; }

    public int? ImportSeqnNo { get; set; }
    public virtual SmUserRawDTO? User { get; set; } = null!;
}

public class CreateDTO2SmOrgGroupProfile: Profile
{
    public CreateDTO2SmOrgGroupProfile()
    {
        CreateMap<SmOrgGroupCreateDTO, SmOrgGroup>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}