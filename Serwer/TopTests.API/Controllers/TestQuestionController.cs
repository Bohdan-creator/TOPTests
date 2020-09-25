using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TopTests.API.Resources;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.TestQuestions;
using TopTests.Services.Models.Testy;

namespace TopTests.API.Controllers
{
    [Route("api/testQuestion")]
    [ApiController]
    public class TestQuestionController : Controller
    {
        private readonly ITestQuestionsService testQuestionService;
        private readonly ResourceManager resourceManager;
        public TestQuestionController(ITestQuestionsService testService)
        {
            this.testQuestionService = testService;
            resourceManager = new ResourceManager("TopTests.API.Resources.ResourceFile", typeof(ResourceFile).Assembly);
        }
        [HttpPost("{id}")]
        public async Task<IActionResult> ReadTestQuestions(int id,UploadFile uploadFile)
        {
            var testQuestions = await testQuestionService.ReadTestQuestions(id, uploadFile);
            if (testQuestions.FieldEmpty != 200)
            {
                return BadRequest(resourceManager.GetString("FieldEmpty"));
            }
            if (testQuestions.QuestionExist != 200)
            {
                return BadRequest(resourceManager.GetString("QuestionExist"));
            }
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion(int id)
        {
            var question = await testQuestionService.DeleteTestQuestion(id);
            if (question == false)
            {
                return NotFound(resourceManager.GetString("Null"));
            }
            return Ok();
        }
        [HttpPatch("{id}")]
        public async Task<IActionResult> EditQuestion(int id.,EditQuestionDto editQuestionDto)
        {
            var question = await testQuestionService.EditTestQuestion(id,editQuestionDto);
            if (question == false)
            {
                return NotFound(resourceManager.GetString("Null"));
            }
            return Ok();
        }
    }
}