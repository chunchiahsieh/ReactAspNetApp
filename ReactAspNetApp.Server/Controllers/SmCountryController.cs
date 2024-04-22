using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAspNetApp.Server.Models;
using ReactAspNetApp.Server.Models.Enums;

namespace ReactAspNetApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SmCountryController(ESGDBContext context, IMapper mapper) : ControllerBase
    {
        private readonly ESGDBContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/SmCountry
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmCountry>>> GetSmCountries()
        {
            return await _context.SmCountries.ToListAsync();
        }

        [HttpGet("i18n")]
        public async Task<ActionResult<IEnumerable<SmTextContentUseDTO>>> GetSmCountryI18ns()
        {
            var response = await _context.SmCountries
                .SelectMany(c => 
                    _context.SmTextContents.Where(
                        tc => tc.TableName == "Country" && tc.SourceId == c.CountryId)
                        .ToList()
                        )
            .ToListAsync();
            var result = _mapper.Map<IEnumerable<SmTextContentUseDTO>>(response);
            return Ok(result);
        }

        // GET: api/SmCountry/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SmCountry>> GetSmCountry(string id)
        {
            var smCountry = await _context.SmCountries.FindAsync(id);

            if (smCountry == null)
            {
                return NotFound();
            }

            return smCountry;
        }

        // PUT: api/SmCountry/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmCountry(string id, SmCountryUpdateDTO smCountryDTO)
        {
            var smCountry = await _context.SmCountries.FindAsync(id);
            if (smCountry == null)
            {
                return NotFound();
            }
            smCountryDTO.ModifiedOn = DateTime.UtcNow;
            _mapper.Map(smCountryDTO, smCountry);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmCountryExists(id))
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

        // POST: api/SmCountry
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmCountry>> PostSmCountry(SmCountryCreateDTO smCountryDTO)
        {
            SmCountry smCountry = _mapper.Map<SmCountry>(smCountryDTO);
            smCountry.SystemStatus = System_status.Active.ToString();
            _context.SmCountries.Add(smCountry);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SmCountryExists(smCountryDTO.CountryCode))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSmCountry", new { id = smCountryDTO.CountryCode }, smCountryDTO);
        }

        // DELETE: api/SmCountry/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmCountry(string id)
        {
            var smCountry = await _context.SmCountries.FindAsync(id);
            if (smCountry == null)
            {
                return NotFound();
            }

            // _context.SmCountries.Remove(smCountry);
            smCountry.SystemStatus = System_status.Inactive.ToString();
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmCountryExists(string id)
        {
            return _context.SmCountries.Any(e => e.CountryCode == id);
        }
    }
}
