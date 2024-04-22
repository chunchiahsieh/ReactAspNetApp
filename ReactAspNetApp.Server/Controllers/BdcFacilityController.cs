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
    public class BdcFacilityController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public BdcFacilityController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/BdcFacility
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BdcFacility>>> GetBdcFacilities()
        {
            return await _context.BdcFacilities.ToListAsync();
        }

        // GET: api/BdcFacility/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BdcFacility>> GetBdcFacility(int id)
        {
            var bdcFacility = await _context.BdcFacilities.FindAsync(id);

            if (bdcFacility == null)
            {
                return NotFound();
            }

            return bdcFacility;
        }

        // PUT: api/BdcFacility/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBdcFacility(int id, BdcFacility bdcFacility)
        {
            if (id != bdcFacility.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(bdcFacility).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BdcFacilityExists(id))
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

        // POST: api/BdcFacility
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BdcFacility>> PostBdcFacility(BdcFacility bdcFacility)
        {
            _context.BdcFacilities.Add(bdcFacility);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BdcFacilityExists(bdcFacility.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBdcFacility", new { id = bdcFacility.OrgGroupId }, bdcFacility);
        }

        // DELETE: api/BdcFacility/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBdcFacility(int id)
        {
            var bdcFacility = await _context.BdcFacilities.FindAsync(id);
            if (bdcFacility == null)
            {
                return NotFound();
            }

            _context.BdcFacilities.Remove(bdcFacility);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BdcFacilityExists(int id)
        {
            return _context.BdcFacilities.Any(e => e.OrgGroupId == id);
        }
    }
}
