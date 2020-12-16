using System;
using System.Collections.Generic;
using System.Text;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;

namespace TopTests.DAL.Repositories
{
    public class TimeRemainingRepository:RepositoryBase<TimeRemainingOfTest>, ITimeRemainingRepository
    {
        public TimeRemainingRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }
    }
}
