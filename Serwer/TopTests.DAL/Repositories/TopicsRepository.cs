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
    public class TopicsRepository : RepositoryBase<Topics>, ITopicsRepository
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

        public async Task<Topics> GetTopic(int id)
        {
            return await context.Set<Topics>()
                .Where(e => e.isDelete == false)
                .FirstOrDefaultAsync(i => i.Id == id);
        }

        public async Task<Topics> RestoreTopic(int id)
        {
            return await context.Set<Topics>()
                       .Where(e => e.isDelete == true)
                       .FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<IEnumerable<Topics>> GetAllDeletedTopics()
        {
            return await context.Set<Topics>()
               .Where(e => e.isDelete == true)
               .ToListAsync();
        }
        public async Task<IEnumerable<Topics>> GetAllTopics(int subjectId)
        {
            return await context.Set<Topics>()
               .Where(e => e.SubjectId == subjectId&&e.isDelete==false)
               .ToListAsync();
        }

    }
}
