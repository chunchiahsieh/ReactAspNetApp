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
    public class BdcArVersionController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public BdcArVersionController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/BdcArVersion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BdcArVersion>>> GetBdcArVersions()
        {
            return await _context.BdcArVersions.ToListAsync();
        }

        // GET: api/BdcArVersion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BdcArVersion>> GetBdcArVersion(int id)
        {
            var bdcArVersion = await _context.BdcArVersions.FindAsync(id);

            if (bdcArVersion == null)
            {
                return NotFound();
            }

            return bdcArVersion;
        }

        // PUT: api/BdcArVersion/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBdcArVersion(int id, BdcArVersion bdcArVersion)
        {
            if (id != bdcArVersion.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(bdcArVersion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BdcArVersionExists(id))
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

        // POST: api/BdcArVersion
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BdcArVersion>> PostBdcArVersion(BdcArVersion bdcArVersion)
        {
            _context.BdcArVersions.Add(bdcArVersion);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BdcArVersionExists(bdcArVersion.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBdcArVersion", new { id = bdcArVersion.OrgGroupId }, bdcArVersion);
        }

        // DELETE: api/BdcArVersion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBdcArVersion(int id)
        {
            var bdcArVersion = await _context.BdcArVersions.FindAsync(id);
            if (bdcArVersion == null)
            {
                return NotFound();
            }

            _context.BdcArVersions.Remove(bdcArVersion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BdcArVersionExists(int id)
        {
            return _context.BdcArVersions.Any(e => e.OrgGroupId == id);
        }
    }
}
