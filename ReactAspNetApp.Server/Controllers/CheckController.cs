using Microsoft.AspNetCore.Mvc;
using ReactAspNetApp.Server.Models;

namespace ReactAspNetApp.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CheckController(ESGDBContext context): ControllerBase
{
    private readonly ESGDBContext _context = context;

    [HttpGet("can_connect")]
    public Task<bool> Get()
    {
        return Task.FromResult(_context.Database.CanConnect());
    }
}