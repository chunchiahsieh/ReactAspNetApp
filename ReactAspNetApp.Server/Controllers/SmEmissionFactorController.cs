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
    public class SmEmissionFactorController(ESGDBContext context, IMapper mapper) : ControllerBase
    {
        private readonly ESGDBContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/SmEmissionFactor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmEmissionFactorReadDTO>>> GetSmEmissionFactors()
        {
            using var transaction = _context.Database.BeginTransaction();
            try
            {
                var list = await _context.SmEmissionFactors
                    .Where(x => x.SystemStatus == ((int)System_status.Active))
                    //.Include(x=>x.User)
                    .ToListAsync();
                var response = _mapper.Map<IEnumerable<SmEmissionFactorReadDTO>>(list);
                /*response = response
                    .Select(x => new SmEmissionFactorWithLocalizations
                    {
                        SmEmissionFactor = x,
                        CountryI18n = [.. _context.SmTextContents
                            .Where(y => y.TableName == "Country" && y.SourceId == x.CountryId)
                            .Select(y => _mapper.Map<SmTextContentUseDTO>(y))],
                        CityI18n = [.. _context.SmTextContents
                            .Where(y => y.TableName == "City" && y.SourceId == x.CityId)
                            .Select(y => _mapper.Map<SmTextContentUseDTO>(y))]
                    }).ToList()
                    .Select(ol =>
                    {
                        ol.SmEmissionFactor.CountryI18ns = ol.CountryI18n;
                        ol.SmEmissionFactor.CityI18ns = ol.CityI18n;
                        return ol.SmEmissionFactor;
                    })
                    .ToList();*/

                await transaction.CommitAsync();
                return Ok(response);
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return BadRequest(ex.Message);
            }
        }

        // Post: api/SmEmissionFactor/search
        // Search SmEmissionFactors
        [HttpPost("search")]
        public async Task<ActionResult<IEnumerable<SmEmissionFactor>>> SearchSmEmissionFactors(IEnumerable<OneRequest> search)
        {
            try
            {
                var query = _context.SmEmissionFactors.AsQueryable();
                query = OneRequest.ApplySearch(query, search);
                return await query.ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Post: api/SmEmissionFactor/upload
        // Upload an excel file to create multiple SmEmissionFactors
        [HttpPost("upload")]
        public async Task<IActionResult> UploadSmEmissionFactors([FromForm] UploadAnExcelFile upload)
        {

            if (upload == null || upload.File == null || upload.File.Length == 0)
            {
                return BadRequest("File is empty");
            }

            try
            {
                var rows = upload.File.OpenReadStream().Query<SmEmissionFactorCreateDTO>()
                    .Where(row => row.OrgGroupId != 0 && row.EmissionFactorName != null)
                    .ToList();
                if (rows == null)
                {
                    return BadRequest("No Data in the file");
                }
                ESGDBContext.AdjustDateTimeToUTC(rows, upload.HourOffset);
                SmEmissionFactor[] smEmissionFactors = _mapper.Map<SmEmissionFactor[]>(rows);
                foreach (var row in smEmissionFactors)
                {
                    row.SystemStatus = (int)System_status.Active;
                    row.ModifiedById = row.CreateById;
                    row.ModifiedOn = DateTime.UtcNow;
                }
                await _context.SmEmissionFactors.AddRangeAsync(smEmissionFactors);
                await _context.SaveChangesAsync();
                return Ok("File uploaded successfully");
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/SmEmissionFactor/5
        [HttpGet("{OGName}/{VCode}")]
        public async Task<ActionResult<SmEmissionFactor>> GetSmEmissionFactor(string OGName, string VCode)
        {
            var smEmissionFactor = await _context.SmEmissionFactors.FindAsync(OGName, VCode);

            if (smEmissionFactor == null)
            {
                return NotFound();
            }

            return smEmissionFactor;
        }

        // PUT: api/SmEmissionFactor/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{OGName}/{VCode}")]
        public async Task<IActionResult> PutSmEmissionFactor(int OrgGuorpId, string EmissionFactorName, SmEmissionFactorUpdateDTO smEmissionFactorDTO)
        {
            try
            {
                SmEmissionFactor? smEmissionFactor = await _context.SmEmissionFactors
                //.Include(x => x.User)
                .Where(x => x.OrgGroupId == OrgGuorpId && x.EmissionFactorName == EmissionFactorName)
                .FirstOrDefaultAsync();
                if (smEmissionFactor == null)
                {
                    return NotFound();
                }
                smEmissionFactorDTO.ModifiedOn = DateTime.UtcNow;
                _mapper.Map(smEmissionFactorDTO, smEmissionFactor);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!SmEmissionFactorExists(OrgGuorpId, EmissionFactorName))
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest(ex.Message);
                }
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // POST: api/SmEmissionFactor
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmEmissionFactor>> PostSmEmissionFactor(SmEmissionFactorCreateDTO smEmissionFactorDTO)
        {
            using var transaction = _context.Database.BeginTransaction();

            try
            {
                SmEmissionFactor smEmissionFactor = _mapper.Map<SmEmissionFactor>(smEmissionFactorDTO);
                //smEmissionFactor.User.ModifiedOn = DateTime.UtcNow;
                //smEmissionFactor.User.Password = "generate by itself"; // TODO TODO TODO
                //smEmissionFactor.User.SystemStatus = ((int)System_status.Active).ToString();
                smEmissionFactor.SystemStatus = ((int)System_status.Active);
                smEmissionFactor.ModifiedById = smEmissionFactor.CreateById;
                smEmissionFactor.ModifiedOn = DateTime.UtcNow;
                _context.SmEmissionFactors.Add(smEmissionFactor);
                await _context.SaveChangesAsync();
                // Update the User table with the OrgGroupId
                //smEmissionFactor.User.OrgGroupId = smEmissionFactor.OrgGroupId;
                //_context.Entry(smEmissionFactor.User).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                await transaction.CommitAsync();
                return CreatedAtAction("GetSmEmissionFactor", new { id = smEmissionFactor.OrgGroupId }, smEmissionFactor);
               // return CreatedAtAction("GetSmEmissionFactor", new { id = smEmissionFactor. }, smEmissionFactor);
            }
            catch (DbUpdateException)
            {
                await transaction.RollbackAsync();
                throw;
            }

        }

        // Set the system status to Inactive
        // DELETE: api/SmEmissionFactor/5
        [HttpDelete("{OGName}/{VCode}")]
        public async Task<IActionResult> DeleteSmEmissionFactor(string OGName, string VCode)
        {
            var smEmissionFactor = await _context.SmEmissionFactors.FindAsync(OGName, VCode);
            if (smEmissionFactor == null)
            {
                return NotFound();
            }
            smEmissionFactor.SystemStatus = (int)System_status.Inactive;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteSmEmissionFactors([FromBody] List<int> ids)
        {
            var stIds = String.Join(",", ids);
            try
            {
                var rows2Delete = await _context.SmEmissionFactors.Where(x => ids.Contains(x.OrgGroupId)).ToListAsync();
                if (rows2Delete == null)
                {
                    return NotFound($"No records found for the ids: {stIds}");
                }
                foreach (var smEmissionFactor in rows2Delete)
                {
                    smEmissionFactor.SystemStatus = (int)System_status.Inactive;
                }
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Conflict($"A concurrency error happened while attempting to delete {stIds}. Please try again.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"{stIds}:: {ex.Message}");
            }
        }

        private bool SmEmissionFactorExists(int OrgGuorpId, string VCode)
        {
            return _context.SmEmissionFactors.Any(e => e.OrgGroupId == OrgGuorpId && e.EmissionFactorName == VCode);
        }
    }

    public class SmEmissionFactorWithLocalizations
    {
        public SmEmissionFactorReadDTO SmEmissionFactor { get; set; } = null!;
        public List<SmTextContentUseDTO> CountryI18n { get; set; } = null!;
        public List<SmTextContentUseDTO> CityI18n { get; set; } = null!;
    }
}
