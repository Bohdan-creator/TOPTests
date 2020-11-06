using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.Services.Models.Topics;

namespace TopTests.Services.Interfaces
{
    public interface ITopicService
    {
        Task<RegisterTopicDto> RegisterTopic(RegisterTopicDto registerTopicDto);
        Task<EditTopicDto> EditTopic(EditTopicDto editTopicDto);
        Task<bool> DeleteTopic(int id);
        Task<bool> RestoreTopic(int id);
        Task<IEnumerable<Topics>> ShowAllDeletedTopics();
        Task<IEnumerable<Topics>> ShowAllTopics(int subjectId);

    }
}
