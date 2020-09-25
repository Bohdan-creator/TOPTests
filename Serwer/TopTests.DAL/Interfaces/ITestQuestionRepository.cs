using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;

namespace TopTests.DAL.Interfaces
{
   public interface ITestQuestionRepository : IRepositoryBase<TestQuestions>
    {
        void SetValueIsDeleteOnSubject(int id);
        void SetValueIsDeleteOnTest(int id);
        Task<TestQuestions> GetQuestion(int id);
        void AddTestsQuestions(List<TestQuestions> testQuestions);
        Task<TestQuestions> CheckIfQuestionExist(TestQuestions TestQuestions);
    }
}
