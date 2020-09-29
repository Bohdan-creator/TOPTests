using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.Topics;

namespace TopTests.Services.Services
{
    public class TopicService : ITopicService
    {
        private readonly ITopicsRepository topicsRepository;
        private readonly IAnswersRepository answersRepository;
        private readonly ITestRepository testRepository;
        private readonly ITestQuestionRepository testQuestionRepository;
        private readonly IMapper mapper;
        public TopicService(ITopicsRepository topicsRepository, IMapper mapper, IAnswersRepository answersRepository,
                           ITestQuestionRepository testQuestionRepository, ITestRepository testRepository)
        {
            this.topicsRepository = topicsRepository;
            this.answersRepository = answersRepository;
            this.testQuestionRepository = testQuestionRepository;
            this.testRepository = testRepository;
            this.mapper = mapper;
        }
        public async Task<RegisterTopicDto> RegisterTopic(RegisterTopicDto registerTopicDto)
        {
            if (registerTopicDto.Name == "")
            {
                return null;
            }
            var topic = new Topics(registerTopicDto.SubjectId, registerTopicDto.Name);
            topicsRepository.Create(topic);
            await topicsRepository.SaveChangesAsync();
            return mapper.Map<RegisterTopicDto>(topic);
        }
        public async Task<EditTopicDto> EditTopic(EditTopicDto editTopicDto)
        {
            if (editTopicDto.Name == "")
            {
                return null;
            }
            var topic = await topicsRepository.GetTopic(editTopicDto.Id);
            topic.Name = editTopicDto.Name;
            topicsRepository.Update(topic);
            await topicsRepository.SaveChangesAsync();
            return mapper.Map<EditTopicDto>(topic);
        }
        public async Task<bool> DeleteTopic(int id)
        {
            var topic = await topicsRepository.GetTopic(id);
            if (topic == null)
            {
                return false;
            }
            testQuestionRepository.SetValueIsDeleteOnTopic(id);
            answersRepository.SetValueIsDeleteOnTopic(id);
            testRepository.SetValueIsDeleteOnTopic(id);
            topic.isDelete = true;
            topicsRepository.Update(topic);
            await topicsRepository.SaveChangesAsync();
            return true;
        }

        public async Task<bool> RestoreTopic(int id)
        {
            var topic = await topicsRepository.RestoreTopic(id);       
            if (topic == null)
            {
                return false;
            }
            testQuestionRepository.SetValueIsNotDeleteOnTopic(id);
            answersRepository.SetValueIsNotDeleteOnTopic(id);
            testRepository.SetValueIsNotDeleteOnTopic(id);
            topic.isDelete = false;
            topicsRepository.Update(topic);
            await topicsRepository.SaveChangesAsync();
            return true;
        }

        public Task<IEnumerable<Topics>> ShowAllDeletedTopics()
        {
            var topics = topicsRepository.GetAllDeletedTopics();
            if (topics == null)
            {
                return null;
            }
            return topics;
        }
    }
}
