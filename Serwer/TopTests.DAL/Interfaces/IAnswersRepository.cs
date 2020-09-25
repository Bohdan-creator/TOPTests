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
        void SaveAnswers(List<Answers> answers);
    }
}
