using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;

namespace TopTests.DAL.Repositories
{
    public class TestQuestionsRepository : RepositoryBase<TestQuestions>, ITestQuestionRepository
    {
        public TestQuestionsRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
        public void SetValueIsDelete(int id)
        {
            context.Set<TestQuestions>()
                .Where(e => e.TopicId == id)
                .ToList()
                .ForEach(c => c.isDelete = true);
        }
    }
}
