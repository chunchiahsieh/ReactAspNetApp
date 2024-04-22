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
    public class BdcReportingPeriodController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public BdcReportingPeriodController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/BdcReportingPeriod
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BdcReportingPeriod>>> GetBdcReportingPeriods()
        {
            return await _context.BdcReportingPeriods.ToListAsync();
        }

        // GET: api/BdcReportingPeriod/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BdcReportingPeriod>> GetBdcReportingPeriod(int id)
        {
            var bdcReportingPeriod = await _context.BdcReportingPeriods.FindAsync(id);

            if (bdcReportingPeriod == null)
            {
                return NotFound();
            }

            return bdcReportingPeriod;
        }

        // PUT: api/BdcReportingPeriod/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBdcReportingPeriod(int id, BdcReportingPeriod bdcReportingPeriod)
        {
            if (id != bdcReportingPeriod.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(bdcReportingPeriod).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BdcReportingPeriodExists(id))
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

        // POST: api/BdcReportingPeriod
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BdcReportingPeriod>> PostBdcReportingPeriod(BdcReportingPeriod bdcReportingPeriod)
        {
            _context.BdcReportingPeriods.Add(bdcReportingPeriod);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BdcReportingPeriodExists(bdcReportingPeriod.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBdcReportingPeriod", new { id = bdcReportingPeriod.OrgGroupId }, bdcReportingPeriod);
        }

        // DELETE: api/BdcReportingPeriod/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBdcReportingPeriod(int id)
        {
            var bdcReportingPeriod = await _context.BdcReportingPeriods.FindAsync(id);
            if (bdcReportingPeriod == null)
            {
                return NotFound();
            }

            _context.BdcReportingPeriods.Remove(bdcReportingPeriod);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BdcReportingPeriodExists(int id)
        {
            return _context.BdcReportingPeriods.Any(e => e.OrgGroupId == id);
        }
    }
}
