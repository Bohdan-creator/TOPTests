using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;

namespace TopTests.DAL.Repositories
{
   public class TopicsRepository:RepositoryBase<Topics>,ITopicsRepository
    {
        public TopicsRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
        public void SetValueIsDelete(int id)
        {
            context.Set<Topics>()
                .Where(e => e.SubjectId == id)
                .ToList()
                .ForEach(c => c.isDelete = true);
        }
        public void RestoreTopics(int id)
        {
            context.Set<Topics>()
                .Where(e => e.SubjectId == id)
                .ToList()
                .ForEach(c => c.isDelete = false);
        }
    }
}
