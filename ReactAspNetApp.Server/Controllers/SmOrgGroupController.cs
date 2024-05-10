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
    public class SmOrgGroupController(ESGDBContext context, IMapper mapper) : ControllerBase
    {
        private readonly ESGDBContext _context = context;
        private readonly IMapper _mapper = mapper;

        // GET: api/SmOrgGroup
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SmOrgGroupReadDTO>>> GetSmOrgGroups()
        {
            using var transaction = _context.Database.BeginTransaction();
            try
            {
                var list = await _context.SmOrgGroups
                    .Where(x => x.SystemStatus == ((int)System_status.Active))
                   // .Include(x => x.User)
                    .ToListAsync();
                var response = _mapper.Map<IEnumerable<SmOrgGroupReadDTO>>(list);
                response = response
                    .Select(x => new SmOrgGroupWithLocalizations
                    {
                        SmOrgGroup = x,
                        CountryI18n = [.. _context.SmTextContents
                            .Where(y => y.TableName == "Country" && y.SourceId == x.CountryId)
                            .Select(y => _mapper.Map<SmTextContentUseDTO>(y))],
                        CityI18n = [.. _context.SmTextContents
                            .Where(y => y.TableName == "City" && y.SourceId == x.CityId)
                            .Select(y => _mapper.Map<SmTextContentUseDTO>(y))]
                    }).ToList()
                    .Select(ol =>
                    {
                        ol.SmOrgGroup.CountryI18ns = ol.CountryI18n;
                        ol.SmOrgGroup.CityI18ns = ol.CityI18n;
                        return ol.SmOrgGroup;
                    })
                    .ToList();

                await transaction.CommitAsync();
                return Ok(response);
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return BadRequest(ex.Message);
            }
        }

        // Post: api/SmOrgGroup/search
        // Search SmOrgGroups
        [HttpPost("search")]
        public async Task<ActionResult<IEnumerable<SmOrgGroup>>> SearchSmOrgGroups(IEnumerable<OneRequest> search)
        {
            try
            {
                var query = _context.SmOrgGroups.AsQueryable();
                query = OneRequest.ApplySearch(query, search);
                return await query.ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Post: api/SmOrgGroup/upload
        // Upload an excel file to create multiple SmOrgGroups
        [HttpPost("upload")]
        public async Task<IActionResult> UploadSmOrgGroups([FromForm] UploadAnExcelFile upload)
        {
            if (upload == null || upload.File == null || upload.File.Length == 0)
            {
                return BadRequest("File is empty");
            }

            try
            {
                var rows = upload.File.OpenReadStream().Query<SmOrgGroupCreateDTO>()
                    .Where(row => row.OrgGroupName != null && row.VendorCode != null)
                    .ToList();
                if (rows == null)
                {
                    return BadRequest("No Data in the file");
                }
                ESGDBContext.AdjustDateTimeToUTC(rows, upload.HourOffset);
                SmOrgGroup[] smOrgGroups = _mapper.Map<SmOrgGroup[]>(rows);
                foreach (var row in smOrgGroups)
                {
                    row.SystemStatus = ((int)System_status.Active);
                    row.ModifiedById = row.CreateById;
                    row.ModifiedOn = DateTime.UtcNow;
                }
                await _context.SmOrgGroups.AddRangeAsync(smOrgGroups);
                await _context.SaveChangesAsync();
                return Ok("File uploaded successfully");
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/SmOrgGroup/5
        [HttpGet("{OGName}/{VCode}")]
        public async Task<ActionResult<SmOrgGroup>> GetSmOrgGroup(string OGName, string VCode)
        {
            var smOrgGroup = await _context.SmOrgGroups.FindAsync(OGName, VCode);

            if (smOrgGroup == null)
            {
                return NotFound();
            }

            return smOrgGroup;
        }

        // PUT: api/SmOrgGroup/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{OGName}/{VCode}")]
        public async Task<IActionResult> PutSmOrgGroup(string OGName, string VCode, SmOrgGroupUpdateDTO smOrgGroupDTO)
        {
            try
            {
                SmOrgGroup? smOrgGroup = await _context.SmOrgGroups
               // .Include(x => x.User)
                .Where(x => x.OrgGroupName == OGName && x.VendorCode == VCode)
                .FirstOrDefaultAsync();
                if (smOrgGroup == null)
                {
                    return NotFound();
                }
                smOrgGroupDTO.ModifiedOn = DateTime.UtcNow;
                _mapper.Map(smOrgGroupDTO, smOrgGroup);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!SmOrgGroupExists(OGName, VCode))
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

        // POST: api/SmOrgGroup
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SmOrgGroup>> PostSmOrgGroup(SmOrgGroupCreateDTO smOrgGroupDTO)
        {
            using var transaction = _context.Database.BeginTransaction();

            try
            {
                SmOrgGroup smOrgGroup = _mapper.Map<SmOrgGroup>(smOrgGroupDTO);
               /* smOrgGroup.User.ModifiedOn = DateTime.UtcNow;
                smOrgGroup.User.Password = "generate by itself"; // TODO TODO TODO
                smOrgGroup.User.SystemStatus = ((int)System_status.Active).ToString();*/
                smOrgGroup.SystemStatus = ((int)System_status.Active);
                smOrgGroup.ModifiedById = smOrgGroup.CreateById;
                smOrgGroup.ModifiedOn = DateTime.UtcNow;
                _context.SmOrgGroups.Add(smOrgGroup);
                await _context.SaveChangesAsync();
                // Update the User table with the OrgGroupId
            //    smOrgGroup.User.OrgGroupId = smOrgGroup.OrgGroupId;
              //  _context.Entry(smOrgGroup.User).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                await transaction.CommitAsync();
                return CreatedAtAction("GetSmOrgGroup", new { id = smOrgGroup.OrgGroupId }, smOrgGroup);
            }
            catch (DbUpdateException)
            {
                await transaction.RollbackAsync();
                throw;
            }

        }

        // Set the system status to Inactive
        // DELETE: api/SmOrgGroup/5
        [HttpDelete("{OGName}/{VCode}")]
        public async Task<IActionResult> DeleteSmOrgGroup(string OGName, string VCode)
        {
            var smOrgGroup = await _context.SmOrgGroups.FindAsync(OGName, VCode);
            if (smOrgGroup == null)
            {
                return NotFound();
            }
            smOrgGroup.SystemStatus = ((int)System_status.Inactive);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteSmOrgGroups([FromBody] List<int> ids)
        {
            var stIds = String.Join(",", ids);
            try
            {
                var rows2Delete = await _context.SmOrgGroups.Where(x => ids.Contains(x.OrgGroupId)).ToListAsync();
                if (rows2Delete == null)
                {
                    return NotFound($"No records found for the ids: {stIds}");
                }
                foreach (var smOrgGroup in rows2Delete)
                {
                    smOrgGroup.SystemStatus = ((int)System_status.Inactive);
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

        private bool SmOrgGroupExists(string OGName, string VCode)
        {
            return _context.SmOrgGroups.Any(e => e.OrgGroupName == OGName && e.VendorCode == VCode);
        }
    }

    public class SmOrgGroupWithLocalizations
    {
        public SmOrgGroupReadDTO SmOrgGroup { get; set; } = null!;
        public List<SmTextContentUseDTO> CountryI18n { get; set; } = null!;
        public List<SmTextContentUseDTO> CityI18n { get; set; } = null!;
    }
}
