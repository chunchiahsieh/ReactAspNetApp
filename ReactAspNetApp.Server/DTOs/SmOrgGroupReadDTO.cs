using AutoMapper;

namespace ReactAspNetApp.Server.Models;

public partial class SmOrgGroupReadDTO
{
    public int OrgGroupId { get; set; }

    public string OrgGroupName { get; set; } = null!;

    public string VendorCode { get; set; } = null!;

    public string? Website { get; set; }

    public string? BusinessRegistrationNo { get; set; }

    public string? StockIdentificationNo { get; set; }

    public int CountryId { get; set; }

    public string? ZipPostalCode { get; set; }

    public int CityId { get; set; }
    public virtual List<SmTextContentUseDTO> CountryI18ns { get; set; } = null!;
    public virtual List<SmTextContentUseDTO> CityI18ns { get; set; } = null!;

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

    public int ModifiedById { get; set; }

    public DateTime ModifiedOn { get; set; }

    public int? ImportSeqnNo { get; set; }

    public string SystemStatus { get; set; } = null!;

    public virtual SmCity City { get; set; } = null!;

    public virtual SmCountry Country { get; set; } = null!;

    // public virtual SmUserRawDTO CreateBy { get; set; } = null!;

    // public virtual SmUserRawDTO ModifiedBy { get; set; } = null!;

    public virtual SmUserRawDTO User { get; set; } = null!;
}

public class SmOrgGroup2ReadDTOProfile : Profile
{
    public SmOrgGroup2ReadDTOProfile()
    {

        CreateMap<SmOrgGroup, SmOrgGroupReadDTO>()
        .ForMember(dest => dest.User, opt => opt.MapFrom(src => src.User))
        .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}