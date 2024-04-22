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
    public class AccessTokenController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public AccessTokenController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/AccessToken
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccessToken>>> GetAccessTokens()
        {
            return await _context.AccessTokens.ToListAsync();
        }

        // GET: api/AccessToken/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AccessToken>> GetAccessToken(int id)
        {
            var accessToken = await _context.AccessTokens.FindAsync(id);

            if (accessToken == null)
            {
                return NotFound();
            }

            return accessToken;
        }

        // PUT: api/AccessToken/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccessToken(int id, AccessToken accessToken)
        {
            if (id != accessToken.AccessTokenId)
            {
                return BadRequest();
            }

            _context.Entry(accessToken).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccessTokenExists(id))
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

        // POST: api/AccessToken
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AccessToken>> PostAccessToken(AccessToken accessToken)
        {
            _context.AccessTokens.Add(accessToken);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AccessTokenExists(accessToken.AccessTokenId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAccessToken", new { id = accessToken.AccessTokenId }, accessToken);
        }

        // DELETE: api/AccessToken/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccessToken(int id)
        {
            var accessToken = await _context.AccessTokens.FindAsync(id);
            if (accessToken == null)
            {
                return NotFound();
            }

            _context.AccessTokens.Remove(accessToken);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccessTokenExists(int id)
        {
            return _context.AccessTokens.Any(e => e.AccessTokenId == id);
        }
    }
}
