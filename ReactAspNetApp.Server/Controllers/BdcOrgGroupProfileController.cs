using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAspNetApp.Server.Models;

namespace ReactAspNetApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BdcOrgGroupProfileController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public BdcOrgGroupProfileController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/BdcOrgGroupProfile
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BdcOrgGroupProfile>>> GetBdcOrgGroupProfiles()
        {
            return await _context.BdcOrgGroupProfiles.ToListAsync();
        }

        // GET: api/BdcOrgGroupProfile/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BdcOrgGroupProfile>> GetBdcOrgGroupProfile(int id)
        {
            var bdcOrgGroupProfile = await _context.BdcOrgGroupProfiles.FindAsync(id);

            if (bdcOrgGroupProfile == null)
            {
                return NotFound();
            }

            return bdcOrgGroupProfile;
        }

        // PUT: api/BdcOrgGroupProfile/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBdcOrgGroupProfile(int id, BdcOrgGroupProfile bdcOrgGroupProfile)
        {
            if (id != bdcOrgGroupProfile.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(bdcOrgGroupProfile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BdcOrgGroupProfileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BdcOrgGroupProfile
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BdcOrgGroupProfile>> PostBdcOrgGroupProfile(BdcOrgGroupProfile bdcOrgGroupProfile)
        {
            _context.BdcOrgGroupProfiles.Add(bdcOrgGroupProfile);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BdcOrgGroupProfileExists(bdcOrgGroupProfile.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBdcOrgGroupProfile", new { id = bdcOrgGroupProfile.OrgGroupId }, bdcOrgGroupProfile);
        }

        // DELETE: api/BdcOrgGroupProfile/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBdcOrgGroupProfile(int id)
        {
            var bdcOrgGroupProfile = await _context.BdcOrgGroupProfiles.FindAsync(id);
            if (bdcOrgGroupProfile == null)
            {
                return NotFound();
            }

            _context.BdcOrgGroupProfiles.Remove(bdcOrgGroupProfile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BdcOrgGroupProfileExists(int id)
        {
            return _context.BdcOrgGroupProfiles.Any(e => e.OrgGroupId == id);
        }
    }
}
