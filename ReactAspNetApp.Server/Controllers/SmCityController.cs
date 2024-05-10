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
using MiniExcelLibs;

namespace ReactAspNetApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SmCityController(ESGDBContext context, IMapper mapper) : ControllerBase
    {
        private readonly ESGDBContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/SmCity
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmCity>>> GetSmCities()
        {
            return await _context.SmCities.ToListAsync();
        }

        [HttpGet("i18n/{countryId}")]
        public async Task<ActionResult<IEnumerable<SmTextContentUseDTO>>> GetSmCityyI18ns(int countryId)
        {
            var response = await _context.SmCities
                .Where(c => c.CountryId == countryId)
                .SelectMany(c =>
                    _context.SmTextContents.Where(
                        tc => tc.TableName == "City" && tc.SourceId == c.CityId)
                        .ToList()
                        )
            .ToListAsync();
            var result = _mapper.Map<IEnumerable<SmTextContentUseDTO>>(response);
            return Ok(result);
        }



        [HttpPost("search")]
        public async Task<ActionResult<IEnumerable<SmCity>>> SearchSmCities(IEnumerable<OneRequest> search)
        {
            var query = _context.SmCities.AsQueryable();
            query = OneRequest.ApplySearch(query, search);
            return await query.ToListAsync();
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadSmCities([FromForm] UploadAnExcelFile upload)
        {
            if(upload == null || upload.File == null || upload.File.Length == 0)
            {
                return BadRequest("File is empty");
            }

            try
            {
                var rows = upload.File.OpenReadStream().Query<SmCityCreateDTO>().ToList();
                if(rows == null)
                {
                    return BadRequest("No Data in the file");
                }
                ESGDBContext.AdjustDateTimeToUTC(rows, upload.HourOffset);
                SmCity[] smCities = _mapper.Map<SmCity[]>(rows);
                foreach (var row in smCities)
                {
                    row.SystemStatus = Convert.ToInt32(System_status.Active);
                    row.ModifiedById = row.CreateById;
                    row.ModifiedOn = DateTime.UtcNow;
                }
                await _context.SmCities.AddRangeAsync(smCities);
                await _context.SaveChangesAsync();
                return Ok("File uploaded successfully");
            }
            catch (System.Exception)
            {
                throw; //TODO TODO need to handle exception
            }
        }

        // GET: api/SmCity/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SmCity>> GetSmCity(int id)
        {
            var smCity = await _context.SmCities.FindAsync(id);

            if (smCity == null)
            {
                return NotFound();
            }

            return smCity;
        }

        // PUT: api/SmCity/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSmCity(int id, SmCityUpdateDTO smCityDTO)
        {
            SmCity? smCity = await _context.SmCities.FindAsync(id);
            if (smCity == null)
            {
                return NotFound();
            }
            smCityDTO.ModifiedOn = DateTime.UtcNow;
            _mapper.Map(smCityDTO, smCity);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SmCityExists(id))
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

        // POST: api/SmCity
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmCity>> PostSmCity(SmCityCreateDTO smCityDTO)
        {
            SmCity smCity = _mapper.Map<SmCity>(smCityDTO);
            smCity.SystemStatus = Convert.ToInt32(System_status.Active.ToString());
            smCity.ModifiedById = smCity.CreateById;
            smCity.ModifiedOn = DateTime.UtcNow;
            _context.SmCities.Add(smCity);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                throw;
            }

            return CreatedAtAction("GetSmCity", new { id = smCity.CityId }, smCity);
        }

        // Set the system status to Inactive
        // DELETE: api/SmCity/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSmCity(int id)
        {
            var smCity = await _context.SmCities.FindAsync(id);
            if (smCity == null)
            {
                return NotFound();
            }
            smCity.SystemStatus = Convert.ToInt32(System_status.Inactive.ToString());
            
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SmCityExists(int id)
        {
            return _context.SmCities.Any(e => e.CityId == id);
        }
    }
}
