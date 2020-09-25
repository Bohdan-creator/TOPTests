using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.Services.Models.TestQuestions;
using TopTests.Services.Models.Testy;

namespace TopTests.Services.Interfaces
{
   public interface ITestQuestionsService
    {
        Task<ErrorTestDto> ReadTestQuestions(int id,UploadFile uploadFile);
        Task<bool> DeleteTestQuestion(int id);
        Task<bool> EditTestQuestion(int id,EditQuestionDto editQuestionDto);
    }
}
