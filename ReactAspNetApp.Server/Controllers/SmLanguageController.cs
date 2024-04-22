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
    public class SmLanguageController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public SmLanguageController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/SmLanguage
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmLanguage>>> GetSmLanguages()
        {
            return await _context.SmLanguages.ToListAsync();
        }

        // GET: api/SmLanguage/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SmLanguage>> GetSmLanguage(string id)
        {
            var smLanguage = await _context.SmLanguages.FindAsync(id);

            if (smLanguage == null)
            {
                return NotFound();
            }

            return smLanguage;
        }

        // PUT: api/SmLanguage/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmLanguage(string id, SmLanguage smLanguage)
        {
            if (id != smLanguage.LangKey)
            {
                return BadRequest();
            }

            _context.Entry(smLanguage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmLanguageExists(id))
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

        // POST: api/SmLanguage
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmLanguage>> PostSmLanguage(SmLanguage smLanguage)
        {
            _context.SmLanguages.Add(smLanguage);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SmLanguageExists(smLanguage.LangKey))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSmLanguage", new { id = smLanguage.LangKey }, smLanguage);
        }

        // DELETE: api/SmLanguage/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmLanguage(string id)
        {
            var smLanguage = await _context.SmLanguages.FindAsync(id);
            if (smLanguage == null)
            {
                return NotFound();
            }

            _context.SmLanguages.Remove(smLanguage);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmLanguageExists(string id)
        {
            return _context.SmLanguages.Any(e => e.LangKey == id);
        }
    }
}
