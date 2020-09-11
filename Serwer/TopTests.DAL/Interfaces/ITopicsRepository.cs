using System;
using System.Collections.Generic;
using System.Text;
using TopTests.DAL.Entities;

namespace TopTests.DAL.Interfaces
{
    public interface ITopicsRepository : IRepositoryBase<Topics>
    {
        void SetValueIsDelete(int id);
        void RestoreTopics(int id);

    }
}
