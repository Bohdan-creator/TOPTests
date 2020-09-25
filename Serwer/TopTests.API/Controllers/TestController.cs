using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Resources;
using System.Text;
using System.Threading.Tasks;
using TopTests.API.Resources;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.Testy;

namespace TopTests.API.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class TestController : Controller
    {
        private readonly ITestService testService;
        private readonly ResourceManager resourceManager;
        public TestController(ITestService testService)
        {
            this.testService = testService;
            resourceManager = new ResourceManager("TopTests.API.Resources.ResourceFile", typeof(ResourceFile).Assembly);
        }
        [HttpPost]
        public async Task<IActionResult> Register(RegisterTestDto registerTestDto)
        {
            var test = await testService.RegisterTest(registerTestDto);
            if (test == null)
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            return Ok(test);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTest(int id)
        {
            if (!await testService.DeleteTest(id))
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            return Ok();
        }
        [HttpPatch("{id}")]
        public async Task<IActionResult> EditTest(int id,EditTestDto editTestDto)
        {
            if(!await testService.EditTest(id, editTestDto))
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            return Ok();
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTests(int id)
        {
            var tests = await testService.GetTests(id);
            if (tests == null)
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            return Ok(tests);
        }
    }
}