using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;

namespace TopTests.DAL.Interfaces
{
    public interface ITopicsRepository : IRepositoryBase<Topics>
    {
        void SetValueIsDelete(int id);
        void RestoreTopics(int id);
        Task<Topics> GetTopic(int id);
        Task<Topics> RestoreTopic(int id);
        Task<IEnumerable<Topics>> GetAllDeletedTopics();
        Task<IEnumerable<Topics>> GetAllTopics(int subjectId);
    }
}
