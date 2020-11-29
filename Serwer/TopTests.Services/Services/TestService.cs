using CsvHelper;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.Testy;

namespace TopTests.Services.Services
{
    public class TestService : ITestService
    {
        private readonly IAnswersRepository answersRepository;
        private readonly ITestRepository testRepository;
        private readonly ITestQuestionRepository testQuestionRepository;
        public TestService(IAnswersRepository answersRepository, ITestQuestionRepository testQuestionRepository,
                          ITestRepository testRepository)
        {
            this.answersRepository = answersRepository;
            this.testQuestionRepository = testQuestionRepository;
            this.testRepository = testRepository;
        }
        public async Task<bool> DeleteTest(int id)
        {
            var test = await testRepository.GetTest(id);
            if (test == null)
            {
                return false;
            }
            test.isDelete = true;
            testQuestionRepository.SetValueIsDeleteOnTest(id);
            answersRepository.SetValueIsDeleteOnTest(id);
            testRepository.Update(test);
            await testRepository.SaveChangesAsync();
            return true;
        }
        public async Task<bool> EditTest(int id, EditTestDto editTestDto)
        {
            var test = await testRepository.GetTest(id);
            if (test == null)
            {
                return false;
            }
            test.Name = editTestDto.Name;
            testRepository.Update(test);
            await testRepository.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Test>> GetTests(string id)
        {
            var tests = await testRepository.GetTests(Int32.Parse(id));
            if (tests == null)
            {
                return null;
            }
            return tests;
        }

        public async Task<Test> RegisterTest(RegisterTestDto registerTestDto)
        {
            if (registerTestDto.Name == "")
            {
                return null;
            }
            var test = new Test( Int32.Parse(registerTestDto.SubjectId),registerTestDto.AdditionalInfo, registerTestDto.Name);
            testRepository.Create(test);
            await testRepository.SaveChangesAsync();
            return test;
        }

        public async Task<bool> RestoreTest(int id)
        {
            var test = await testRepository.RestoreTest(id);
            if (test == null)
            {
                return false;
            }
            testQuestionRepository.SetValueIsNotDeleteOnTest(id);
            answersRepository.SetValueIsNotDeleteOnTest(id);
            test.isDelete = false;
            testRepository.Update(test);
            await testRepository.SaveChangesAsync();
            return true;
        }

        public Task<IEnumerable<Test>> ShowAllDeletedTests()
        {
            var tests = testRepository.GetAllDeletedTests();
            if (tests == null)
            {
                return null;
            }
            return tests;
        }
    }
}

