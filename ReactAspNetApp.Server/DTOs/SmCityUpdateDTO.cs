using System;
using System.Collections.Generic;

namespace ReactAspNetApp.Server.Models;

public partial class SmCityUpdateDTO
{
    public string? ZipPostalCode { get; set; }

    public int ModifiedById { get; set; }

    public DateTime? ModifiedOn { get; set; }

}

public class UpdateDTOSmCityProfile : AutoMapper.Profile
{
    //注意：由於Update中有些欄位會由原本的 int 改成用 int?，這會導致在進行mapping時，他會先將null轉成0，所以需要用PreCondition特別的處理
    public UpdateDTOSmCityProfile()
    {
        CreateMap<SmCityUpdateDTO, SmCity>().ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
    }
}
