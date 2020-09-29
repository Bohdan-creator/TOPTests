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
    public class TestRepository : RepositoryBase<Test>, ITestRepository
    {
        public TestRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<IEnumerable<Test>> GetAllDeletedTests()
        {
            return await context.Set<Test>()
               .Where(e => e.isDelete == true)
               .ToListAsync();
        }
        public void SetValueIsDeleteOnTopic(int id)
        {
            context.Set<Test>()
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
        public async Task<Test> GetTest(int id)
        {
            return await context.Set<Test>()
                .FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<IEnumerable<Test>> GetTests(int id)
        {
            return await context.Set<Test>()
                .Where(e => e.isDelete == false&&e.TopicId==id)
                .ToListAsync();
        }

        public async Task<Test> RestoreTest(int id)
        {
            return await context.Set<Test>()
            .Where(e => e.isDelete == true)
            .FirstOrDefaultAsync(e => e.Id == id);
        }
    }
}
