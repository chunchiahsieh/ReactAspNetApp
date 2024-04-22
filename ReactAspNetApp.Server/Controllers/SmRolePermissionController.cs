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
    public class SmRolePermissionController : ControllerBase
    {
        private readonly ESGDBContext _context;

        public SmRolePermissionController(ESGDBContext context)
        {
            _context = context;
        }

        // GET: api/SmRolePermission
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmRolePermission>>> GetSmRolePermissions()
        {
            return await _context.SmRolePermissions.ToListAsync();
        }

        // GET: api/SmRolePermission/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SmRolePermission>> GetSmRolePermission(int id)
        {
            var smRolePermission = await _context.SmRolePermissions.FindAsync(id);

            if (smRolePermission == null)
            {
                return NotFound();
            }

            return smRolePermission;
        }

        // PUT: api/SmRolePermission/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmRolePermission(int id, SmRolePermission smRolePermission)
        {
            if (id != smRolePermission.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(smRolePermission).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmRolePermissionExists(id))
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

        // POST: api/SmRolePermission
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmRolePermission>> PostSmRolePermission(SmRolePermission smRolePermission)
        {
            _context.SmRolePermissions.Add(smRolePermission);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SmRolePermissionExists(smRolePermission.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSmRolePermission", new { id = smRolePermission.OrgGroupId }, smRolePermission);
        }

        // DELETE: api/SmRolePermission/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmRolePermission(int id)
        {
            var smRolePermission = await _context.SmRolePermissions.FindAsync(id);
            if (smRolePermission == null)
            {
                return NotFound();
            }

            _context.SmRolePermissions.Remove(smRolePermission);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmRolePermissionExists(int id)
        {
            return _context.SmRolePermissions.Any(e => e.OrgGroupId == id);
        }
    }
}
