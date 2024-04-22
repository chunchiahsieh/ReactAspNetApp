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
    public class SmChoiceController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public SmChoiceController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/SmChoice
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmChoice>>> GetSmChoices()
        {
            return await _context.SmChoices.ToListAsync();
        }

        // GET: api/SmChoice/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SmChoice>> GetSmChoice(string id)
        {
            var smChoice = await _context.SmChoices.FindAsync(id);

            if (smChoice == null)
            {
                return NotFound();
            }

            return smChoice;
        }

        // PUT: api/SmChoice/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmChoice(string id, SmChoice smChoice)
        {
            if (id != smChoice.ChoiceValue)
            {
                return BadRequest();
            }

            _context.Entry(smChoice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmChoiceExists(id))
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

        // POST: api/SmChoice
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmChoice>> PostSmChoice(SmChoice smChoice)
        {
            _context.SmChoices.Add(smChoice);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SmChoiceExists(smChoice.ChoiceValue))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSmChoice", new { id = smChoice.ChoiceValue }, smChoice);
        }

        // DELETE: api/SmChoice/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmChoice(string id)
        {
            var smChoice = await _context.SmChoices.FindAsync(id);
            if (smChoice == null)
            {
                return NotFound();
            }

            _context.SmChoices.Remove(smChoice);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmChoiceExists(string id)
        {
            return _context.SmChoices.Any(e => e.ChoiceValue == id);
        }
    }
}
