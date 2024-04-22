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
    public class BdcReportingYearController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public BdcReportingYearController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/BdcReportingYear
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BdcReportingYear>>> GetBdcReportingYears()
        {
            return await _context.BdcReportingYears.ToListAsync();
        }

        // GET: api/BdcReportingYear/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BdcReportingYear>> GetBdcReportingYear(int id)
        {
            var bdcReportingYear = await _context.BdcReportingYears.FindAsync(id);

            if (bdcReportingYear == null)
            {
                return NotFound();
            }

            return bdcReportingYear;
        }

        // PUT: api/BdcReportingYear/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBdcReportingYear(int id, BdcReportingYear bdcReportingYear)
        {
            if (id != bdcReportingYear.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(bdcReportingYear).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BdcReportingYearExists(id))
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

        // POST: api/BdcReportingYear
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BdcReportingYear>> PostBdcReportingYear(BdcReportingYear bdcReportingYear)
        {
            _context.BdcReportingYears.Add(bdcReportingYear);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BdcReportingYearExists(bdcReportingYear.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBdcReportingYear", new { id = bdcReportingYear.OrgGroupId }, bdcReportingYear);
        }

        // DELETE: api/BdcReportingYear/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBdcReportingYear(int id)
        {
            var bdcReportingYear = await _context.BdcReportingYears.FindAsync(id);
            if (bdcReportingYear == null)
            {
                return NotFound();
            }

            _context.BdcReportingYears.Remove(bdcReportingYear);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BdcReportingYearExists(int id)
        {
            return _context.BdcReportingYears.Any(e => e.OrgGroupId == id);
        }
    }
}
