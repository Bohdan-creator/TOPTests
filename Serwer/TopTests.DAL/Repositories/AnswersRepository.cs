﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;

namespace TopTests.DAL.Repositories
{
    public class AnswersRepository : RepositoryBase<Answers>, IAnswersRepository
    {
        public AnswersRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<Answers>> GetAnswersForQuestion(string questionId)
        {
            return await context.Set<Answers>()
                .Where(e => e.isDelete == false&&e.NumberOfIdentificationQuestion==questionId)
                .ToListAsync();
        }

        public void SaveAnswers(List<Answers> answers)
        {
            context.Set<Answers>().AddRange(answers);
            context.SaveChanges();
        }

        public void SetValueIsDeleteOnQuestion(string id)
        {
            context.Set<Answers>()
                 .Where(e => e.NumberOfIdentificationQuestion == id)
                 .ToList()
                 .ForEach(c => c.isDelete = true);
        }

        public void SetValueIsDeleteOnSubject(int id)
        {
            context.Set<Answers>()
                .Where(e => e.SubjectId == id)
                .ToList()
                .ForEach(c => c.isDelete = true);
        }

        public void SetValueIsDeleteOnTest(int id)
        {
            context.Set<Answers>()
                .Where(e => e.TestId == id)
                .ToList()
                .ForEach(c => c.isDelete = true);
        }
        public void SetValueIsDeleteOnTopic(int id)
        {
            context.Set<Answers>()
                .Where(e => e.TopicId == id)
                .ToList()
                .ForEach(c => c.isDelete = true);
        }
        public void SetValueIsNotDeleteOnTopic(int id)
        {
            context.Set<Answers>()
                .Where(e => e.TopicId == id)
                .ToList()
                .ForEach(c => c.isDelete = false);
        }
        public void SetValueIsNotDeleteOnTest(int id)
        {
            context.Set<Answers>()
                .Where(e => e.TestId == id)
                .ToList()
                .ForEach(c => c.isDelete = false);
        }
    }
}
