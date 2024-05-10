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
    public class SmEmissionFactorLibrariesController(ESGDBContext context, IMapper mapper) : ControllerBase
    {
        private readonly ESGDBContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/SmEmissionFactorLibraries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmEmissionFactorLibraryReadDTO>>> GetSmEmissionFactorLibrariess()
        {
            using var transaction = _context.Database.BeginTransaction();
            try
            {
                var list = await _context.SmEmissionFactorLibraries
                    .Where(x => x.SystemStatus == ((int)System_status.Active))
                    //.Include(x=>x.User)
                    .ToListAsync();
                var response = _mapper.Map<IEnumerable<SmEmissionFactorLibraryReadDTO>>(list);
                /*response = response
                    .Select(x => new SmEmissionFactorLibrariesWithLocalizations
                    {
                        SmEmissionFactorLibraries = x,
                        CountryI18n = [.. _context.SmTextContents
                            .Where(y => y.TableName == "Country" && y.SourceId == x.CountryId)
                            .Select(y => _mapper.Map<SmTextContentUseDTO>(y))],
                        CityI18n = [.. _context.SmTextContents
                            .Where(y => y.TableName == "City" && y.SourceId == x.CityId)
                            .Select(y => _mapper.Map<SmTextContentUseDTO>(y))]
                    }).ToList()
                    .Select(ol =>
                    {
                        ol.SmEmissionFactorLibraries.CountryI18ns = ol.CountryI18n;
                        ol.SmEmissionFactorLibraries.CityI18ns = ol.CityI18n;
                        return ol.SmEmissionFactorLibraries;
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

        // Post: api/SmEmissionFactorLibraries/search
        // Search SmEmissionFactorLibrariess
        [HttpPost("search")]
        public async Task<ActionResult<IEnumerable<SmEmissionFactorLibrary>>> SearchSmEmissionFactorLibrariess(IEnumerable<OneRequest> search)
        {
            try
            {
                var query = _context.SmEmissionFactorLibraries.AsQueryable();
                query = OneRequest.ApplySearch(query, search);
                return await query.ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Post: api/SmEmissionFactorLibraries/upload
        // Upload an excel file to create multiple SmEmissionFactorLibrariess
        [HttpPost("upload")]
        public async Task<IActionResult> UploadSmEmissionFactorLibrariess([FromForm] UploadAnExcelFile upload)
        {

            if (upload == null || upload.File == null || upload.File.Length == 0)
            {
                return BadRequest("File is empty");
            }

            try
            {
                var rows = upload.File.OpenReadStream().Query<SmEmissionFactorLibraryCreateDTO>()
                    .Where(row => row.OrgGuorpId != 0 && row.EmissionFactorLibraryName != null)
                    .ToList();
                if (rows == null)
                {
                    return BadRequest("No Data in the file");
                }
                ESGDBContext.AdjustDateTimeToUTC(rows, upload.HourOffset);
                SmEmissionFactorLibrary[] smEmissionFactorLibrariess = _mapper.Map<SmEmissionFactorLibrary[]>(rows);
                foreach (var row in smEmissionFactorLibrariess)
                {
                    row.SystemStatus = (int)System_status.Active;
                    row.ModifiedById = row.CreateById;
                    row.ModifiedOn = DateTime.UtcNow;
                }
                await _context.SmEmissionFactorLibraries.AddRangeAsync(smEmissionFactorLibrariess);
                await _context.SaveChangesAsync();
                return Ok("File uploaded successfully");
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/SmEmissionFactorLibraries/5
        [HttpGet("{OGName}/{VCode}")]
        public async Task<ActionResult<SmEmissionFactorLibrary>> GetSmEmissionFactorLibraries(string OGName, string VCode)
        {
            var smEmissionFactorLibraries = await _context.SmEmissionFactorLibraries.FindAsync(OGName, VCode);

            if (smEmissionFactorLibraries == null)
            {
                return NotFound();
            }

            return smEmissionFactorLibraries;
        }

        // PUT: api/SmEmissionFactorLibraries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{OGName}/{VCode}")]
        public async Task<IActionResult> PutSmEmissionFactorLibraries(int OrgGuorpId, string EmissionFactorLibraryName, SmEmissionFactorLibraryUpdateDTO smEmissionFactorLibrariesDTO)
        {
            try
            {
                SmEmissionFactorLibrary? smEmissionFactorLibraries = await _context.SmEmissionFactorLibraries
                //.Include(x => x.User)
                .Where(x => x.OrgGroupId == OrgGuorpId && x.EmissionFactorLibraryName == EmissionFactorLibraryName)
                .FirstOrDefaultAsync();
                if (smEmissionFactorLibraries == null)
                {
                    return NotFound();
                }
                smEmissionFactorLibrariesDTO.ModifiedOn = DateTime.UtcNow;
                _mapper.Map(smEmissionFactorLibrariesDTO, smEmissionFactorLibraries);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!SmEmissionFactorLibrariesExists(OrgGuorpId, EmissionFactorLibraryName))
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

        // POST: api/SmEmissionFactorLibraries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmEmissionFactorLibrary>> PostSmEmissionFactorLibraries(SmEmissionFactorLibraryCreateDTO smEmissionFactorLibrariesDTO)
        {
            using var transaction = _context.Database.BeginTransaction();

            try
            {
                SmEmissionFactorLibrary smEmissionFactorLibraries = _mapper.Map<SmEmissionFactorLibrary>(smEmissionFactorLibrariesDTO);
                //smEmissionFactorLibraries.User.ModifiedOn = DateTime.UtcNow;
                //smEmissionFactorLibraries.User.Password = "generate by itself"; // TODO TODO TODO
                //smEmissionFactorLibraries.User.SystemStatus = ((int)System_status.Active).ToString();
                smEmissionFactorLibraries.SystemStatus = ((int)System_status.Active);
                smEmissionFactorLibraries.ModifiedById = smEmissionFactorLibraries.CreateById;
                smEmissionFactorLibraries.ModifiedOn = DateTime.UtcNow;
                _context.SmEmissionFactorLibraries.Add(smEmissionFactorLibraries);
                await _context.SaveChangesAsync();
                // Update the User table with the OrgGroupId
                //smEmissionFactorLibraries.User.OrgGroupId = smEmissionFactorLibraries.OrgGroupId;
                //_context.Entry(smEmissionFactorLibraries.User).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                await transaction.CommitAsync();
                return CreatedAtAction("GetSmEmissionFactorLibraries", new { id = smEmissionFactorLibraries.OrgGroupId }, smEmissionFactorLibraries);
               // return CreatedAtAction("GetSmEmissionFactorLibraries", new { id = smEmissionFactorLibraries. }, smEmissionFactorLibraries);
            }
            catch (DbUpdateException)
            {
                await transaction.RollbackAsync();
                throw;
            }

        }

        // Set the system status to Inactive
        // DELETE: api/SmEmissionFactorLibraries/5
        [HttpDelete("{OGName}/{VCode}")]
        public async Task<IActionResult> DeleteSmEmissionFactorLibraries(string OGName, string VCode)
        {
            var smEmissionFactorLibraries = await _context.SmEmissionFactorLibraries.FindAsync(OGName, VCode);
            if (smEmissionFactorLibraries == null)
            {
                return NotFound();
            }
            smEmissionFactorLibraries.SystemStatus = (int)System_status.Inactive;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteSmEmissionFactorLibrariess([FromBody] List<int> ids)
        {
            var stIds = String.Join(",", ids);
            try
            {
                var rows2Delete = await _context.SmEmissionFactorLibraries.Where(x => ids.Contains(x.OrgGroupId)).ToListAsync();
                if (rows2Delete == null)
                {
                    return NotFound($"No records found for the ids: {stIds}");
                }
                foreach (var smEmissionFactorLibraries in rows2Delete)
                {
                    smEmissionFactorLibraries.SystemStatus = (int)System_status.Inactive;
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

        private bool SmEmissionFactorLibrariesExists(int OrgGuorpId, string VCode)
        {
            return _context.SmEmissionFactorLibraries.Any(e => e.OrgGroupId == OrgGuorpId && e.EmissionFactorLibraryName == VCode);
        }
    }

    public class SmEmissionFactorLibrariesWithLocalizations
    {
        public SmEmissionFactorLibraryReadDTO SmEmissionFactorLibraries { get; set; } = null!;
        public List<SmTextContentUseDTO> CountryI18n { get; set; } = null!;
        public List<SmTextContentUseDTO> CityI18n { get; set; } = null!;
    }
}
