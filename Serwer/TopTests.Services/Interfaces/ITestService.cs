using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.Services.Models.Testy;

namespace TopTests.Services.Interfaces
{
    public interface ITestService
    {
        Task<bool> ReadTest(UploadFile uploadFile);
    }
}
