﻿using System.Collections.Generic;
using System.Linq;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;

namespace TopTests.DAL.Repositories
{
    public class TestQuestionsRepository : RepositoryBase<TestQuestions>, ITestQuestionRepository
    {
        public TestQuestionsRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public  IEnumerable<TestQuestions> GetLastRow()
        {
           // var order = context.TestQuestions.OrderByDescending(o => o.Id).Take(1);
            return null;
        }
        public void addTestsQuestions(List<TestQuestions> testQuestions)
        {
            context.Set<TestQuestions>().AddRange(testQuestions);
            context.SaveChanges();
        }
        public void SetValueIsDelete(int id)
        {
            context.Set<TestQuestions>()
                .Where(e => e.SubjectId == id)
                .ToList()
                .ForEach(c => c.isDelete = true);
        }
    }
}