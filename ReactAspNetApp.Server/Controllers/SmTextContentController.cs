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
    public class SmTextContentController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public SmTextContentController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/SmTextContent
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmTextContent>>> GetSmTextContents()
        {
            return await _context.SmTextContents.ToListAsync();
        }

        // GET: api/SmTextContent/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SmTextContent>> GetSmTextContent(string id)
        {
            var smTextContent = await _context.SmTextContents.FindAsync(id);

            if (smTextContent == null)
            {
                return NotFound();
            }

            return smTextContent;
        }

        // PUT: api/SmTextContent/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmTextContent(string id, SmTextContent smTextContent)
        {
            if (id != smTextContent.TableName)
            {
                return BadRequest();
            }

            _context.Entry(smTextContent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmTextContentExists(id))
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

        // POST: api/SmTextContent
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmTextContent>> PostSmTextContent(SmTextContent smTextContent)
        {
            _context.SmTextContents.Add(smTextContent);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SmTextContentExists(smTextContent.TableName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSmTextContent", new { id = smTextContent.TableName }, smTextContent);
        }

        // DELETE: api/SmTextContent/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmTextContent(string id)
        {
            var smTextContent = await _context.SmTextContents.FindAsync(id);
            if (smTextContent == null)
            {
                return NotFound();
            }

            _context.SmTextContents.Remove(smTextContent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmTextContentExists(string id)
        {
            return _context.SmTextContents.Any(e => e.TableName == id);
        }
    }
}
