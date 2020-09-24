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
    [Route("api/readFile")]
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
        public async Task<IActionResult> ReadFile([FromForm]UploadFile file)
        {
            var response = await testService.ReadTestQuestions(file);
            if (response.FieldEmpty == 400)
            {
                return BadRequest(resourceManager.GetString("FieldEmpty"));
            }
            else if(response.QuestionExist==400)
            {
                return BadRequest(resourceManager.GetString("QuestionExist"));
            }
            return Ok();
        }
    }
}