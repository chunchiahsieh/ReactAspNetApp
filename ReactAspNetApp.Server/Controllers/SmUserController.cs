using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAspNetApp.Server.Models;

namespace ReactAspNetApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SmUserController(ESGDBContext context, IMapper mapper) : ControllerBase
    {
        private readonly ESGDBContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/SmUser
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmUser>>> GetSmUsers()
        {
            return await _context.SmUsers.ToListAsync();
        }

        // GET: api/SmUser/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SmUser>> GetSmUser(int id)
        {
            var smUser = await _context.SmUsers.FindAsync(id);

            if (smUser == null)
            {
                return NotFound();
            }

            return smUser;
        }

        // PUT: api/SmUser/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmUser(int id, SmUser smUser)
        {
            if (id != smUser.OrgGroupId)
            {
                return BadRequest();
            }

            _context.Entry(smUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmUserExists(id))
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

        // POST: api/SmUser
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmUser>> PostSmUser(SmUserCreateDTO smUserDTO)
        {
            SmUser smUser = _mapper.Map<SmUser>(smUserDTO);
            _context.SmUsers.Add(smUser);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SmUserExists(smUserDTO.OrgGroupId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSmUser", new { id = smUserDTO.OrgGroupId }, smUserDTO);
        }

        // DELETE: api/SmUser/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmUser(int id)
        {
            var smUser = await _context.SmUsers.FindAsync(id);
            if (smUser == null)
            {
                return NotFound();
            }

            _context.SmUsers.Remove(smUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmUserExists(int id)
        {
            return _context.SmUsers.Any(e => e.OrgGroupId == id);
        }
    }
}
