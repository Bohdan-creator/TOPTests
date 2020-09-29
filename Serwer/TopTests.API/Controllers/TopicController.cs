using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TopTests.API.Resources;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.Topics;

namespace TopTests.API.Controllers
{
    [Route("api/topic")]
    [ApiController]
    public class TopicController : Controller
    {
        private readonly ITopicService topicService;
        private readonly ResourceManager resourceManager;
        public TopicController(ITopicService topicService)
        {
            this.topicService = topicService;
            resourceManager = new ResourceManager("TopTests.API.Resources.ResourceFile", typeof(ResourceFile).Assembly);
        }
        [HttpPost("register")]
        public async Task<IActionResult> RegisterTopic(RegisterTopicDto registerTopicDto)
        {
            var topic = await topicService.RegisterTopic(registerTopicDto);
            if (topic == null)
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            return Ok(topic);
        }
        [HttpPatch("edit")]
        public async Task<IActionResult> EditTopic(EditTopicDto editTopicDto)
        {
            var editTopic = await topicService.EditTopic(editTopicDto);
            if (editTopic == null)
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTopic(int id)
        {
            if(!await topicService.DeleteTopic(id))
            {
                return BadRequest(resourceManager.GetString("Null"));
            }
            return Ok();
        }
        [HttpGet]
        public async Task<IActionResult> GetAllDeletedTopics()
        {
            var topics = await topicService.ShowAllDeletedTopics();
            if (topics == null)
            {
                return NotFound(resourceManager.GetString("Null"));
            }
            return Ok(topics);
        }
        [HttpGet("restore/{id}")]
        public async Task<IActionResult> RestoreTopic(int id)
        {
            if (!await topicService.RestoreTopic(id))
            {
                return NotFound(resourceManager.GetString("Null"));
            }
            return Ok();
        }
    }
}