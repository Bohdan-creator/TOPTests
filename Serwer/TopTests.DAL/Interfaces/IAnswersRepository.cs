using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;

namespace TopTests.DAL.Interfaces
{
    public interface IAnswersRepository : IRepositoryBase<Answers>
    {
        void SetValueIsDeleteOnSubject(int id);
        void SetValueIsDeleteOnTest(int id);
        void SetValueIsDeleteOnQuestion(string id);
        void SetValueIsDeleteOnTopic(int id);
        void SetValueIsNotDeleteOnTopic(int id);
        void SetValueIsNotDeleteOnTest(int id);
        void SaveAnswers(List<Answers> answers);
        Task<IEnumerable<Answers>> GetAnswersForQuestion(string questionId);
    }
}
