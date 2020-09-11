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
    public class SubjectRepository : RepositoryBase<Subjects>, ISubjectRepository
    {
        public SubjectRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<Subjects> GetSubjectById(int id)
        {
            return await context.Set<Subjects>()
                .Where(e => e.isDelete == false)
                .FirstOrDefaultAsync(e => e.Id == id);
                
        }

        public async Task<IEnumerable<Subjects>> GetSubjects()
        {
            return await context.Set<Subjects>()
                 .Where(e => e.isDelete == false)
                 .ToListAsync();
        }
        public async Task<IEnumerable<Subjects>> GetDeleteSubjects()
        {
            return await context.Set<Subjects>()
                 .Where(e => e.isDelete == true)
                 .ToListAsync();
        }

        public async Task<Subjects> GetDeleteSubjectById(int id)
        {
            return await context.Set<Subjects>()
            .Where(e => e.isDelete == true)
            .FirstOrDefaultAsync(e => e.Id == id);
        }
    }
}
