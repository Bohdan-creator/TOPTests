﻿using System;
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
        void addTestsQuestions(List<TestQuestions> testQuestions);
    }
}
