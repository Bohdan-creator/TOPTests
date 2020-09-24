﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public async Task<Test> GetTest(int id)
        {
            return await context.Set<Test>()
                .FirstOrDefaultAsync(e => e.Id == id);
        }
    }
}
