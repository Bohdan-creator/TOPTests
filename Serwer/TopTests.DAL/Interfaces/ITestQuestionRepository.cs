using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;

namespace TopTests.DAL.Interfaces
{
   public interface ITestQuestionRepository : IRepositoryBase<TestQuestions>
    {
        void SetValueIsDelete(int id);
        IEnumerable<TestQuestions> GetLastRow();
        void AddTestsQuestions(List<TestQuestions> testQuestions);
        Task<TestQuestions> CheckIfQuestionExist(TestQuestions TestQuestions);
    }
}
