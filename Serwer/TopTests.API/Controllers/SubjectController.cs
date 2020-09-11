using System.Resources;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TopTests.API.Resources;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.Subjects;

namespace TopTests.API.Controllers
{
    [ApiController]
    [Route("api/subject")]
    public class SubjectController : Controller
    {
        private readonly ISubjectService subjectService;
        private readonly ResourceManager resourceManager;
        public SubjectController(ISubjectService subjectService)
        {
            this.subjectService = subjectService;
            resourceManager = new ResourceManager("TopTests.API.Resources.ResourceFile", typeof(ResourceFile).Assembly);
        }
        [HttpPost("registerSubject")]
        public async Task<IActionResult> RegisterSubject(RegisterSubjectDto registerSubjectDto)
        {
            if (registerSubjectDto == null)
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            var subject = await subjectService.RegisterSubject(registerSubjectDto);
            return Ok(subject);
        }
        [HttpPatch("editSubject/{id}")]
        public async Task<IActionResult> EditSubject(int id, EditSubjectDto editSubjectDto)
        {
            if (editSubjectDto == null)
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            var edit_subject = await subjectService.EditSubject(id, editSubjectDto);
            if (edit_subject == null)
            {
                return NotFound(resourceManager.GetString("Id"));
            }
            return Ok(edit_subject);
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteSubject(int id)
        {
            if (!await subjectService.DeleteSubject(id))
            {
                return NotFound(resourceManager.GetString("Id"));
            }
            return Ok();
        }
        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllSubjects()
        {
            var subjects = await subjectService.GetAllSubjects();
            if (subjects == null)
            {
                return NotFound(resourceManager.GetString("Null"));
            }
            return Ok(subjects);
        }
        [HttpGet("getAllDeleted")]
        public async Task<IActionResult> GetAllDeletedSubjects()
        {
            var subjects = await subjectService.GetAllDeletedSubjects();
            if (subjects == null)
            {
                return NotFound(resourceManager.GetString("Null"));
            }
            return Ok(subjects);
        }
        [HttpPatch("restore/{id}")]
        public async Task<IActionResult> RestoreSubject(int id)
        {
            var subject = await subjectService.RestoreSubject(id);
            if (subject == null)
            {
                return NotFound(resourceManager.GetString("Id"));
            }
            return Ok(subject);
        }
    }
}