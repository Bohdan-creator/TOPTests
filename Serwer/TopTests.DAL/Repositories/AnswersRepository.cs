using Microsoft.EntityFrameworkCore;
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
        public void SaveAnswers(List<Answers> answers)
        {
            context.Set<Answers>().AddRange(answers);
            context.SaveChanges();
        }

        public void SetValueIsDelete(int id)
        {
            context.Set<Answers>()
                .Where(e => e.SubjectId == id)
                .ToList()
                .ForEach(c => c.isDelete = true);
        }
    }
}
