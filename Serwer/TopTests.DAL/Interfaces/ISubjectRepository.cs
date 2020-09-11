using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;

namespace TopTests.DAL.Interfaces
{
    public interface ISubjectRepository : IRepositoryBase<Subjects>
    {
        Task<IEnumerable<Subjects>> GetSubjects();
        Task<IEnumerable<Subjects>> GetDeleteSubjects();

        Task<Subjects> GetSubjectById(int id);
        Task<Subjects> GetDeleteSubjectById(int id);

    }
}
