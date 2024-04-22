namespace ReactAspNetApp.Server.Models;

public class UploadAnExcelFile
{
    public IFormFile? File { get; set; }
    public int? HourOffset { get; set; }
}
