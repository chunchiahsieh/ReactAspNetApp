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
    public class BdcOrgUnitController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public BdcOrgUnitController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/BdcOrgUnit
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BdcOrgUnit>>> GetBdcOrgUnits()
        {
            return await _context.BdcOrgUnits.ToListAsync();
        }

        // GET: api/BdcOrgUnit/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BdcOrgUnit>> GetBdcOrgUnit(int id)
        {
            var bdcOrgUnit = await _context.BdcOrgUnits.FindAsync(id);

            if (bdcOrgUnit == null)
            {
                return NotFound();
            }

            return bdcOrgUnit;
        }

        // PUT: api/BdcOrgUnit/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBdcOrgUnit(int id, BdcOrgUnit bdcOrgUnit)
        {
            if (id != bdcOrgUnit.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(bdcOrgUnit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BdcOrgUnitExists(id))
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

        // POST: api/BdcOrgUnit
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BdcOrgUnit>> PostBdcOrgUnit(BdcOrgUnit bdcOrgUnit)
        {
            _context.BdcOrgUnits.Add(bdcOrgUnit);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BdcOrgUnitExists(bdcOrgUnit.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBdcOrgUnit", new { id = bdcOrgUnit.OrgGroupId }, bdcOrgUnit);
        }

        // DELETE: api/BdcOrgUnit/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBdcOrgUnit(int id)
        {
            var bdcOrgUnit = await _context.BdcOrgUnits.FindAsync(id);
            if (bdcOrgUnit == null)
            {
                return NotFound();
            }

            _context.BdcOrgUnits.Remove(bdcOrgUnit);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BdcOrgUnitExists(int id)
        {
            return _context.BdcOrgUnits.Any(e => e.OrgGroupId == id);
        }
    }
}
