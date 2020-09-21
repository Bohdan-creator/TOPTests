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
        private readonly ITopicsRepository topicsRepository;
        private readonly IAnswersRepository answersRepository;
        private readonly ITestQuestionRepository testQuestionRepository;
        public TestService(ITopicsRepository topicsRepository, IAnswersRepository answersRepository,
                           ITestQuestionRepository testQuestionRepository)
        {
            this.topicsRepository = topicsRepository;
            this.answersRepository = answersRepository;
            this.testQuestionRepository = testQuestionRepository;
        }
        public async Task<bool> ReadTest(UploadFile uploadFile)
        {
            var files = uploadFile.formFile;
            var testQuestion = new TestQuestions();
            var list_testQuestion = new List<TestQuestions>();
            var answer = new Answers();
            var list_answer = new List<Answers>();
            var options = new List<string>();
            CultureInfo culture1 = CultureInfo.CurrentCulture;
            using (TextReader reader = new StreamReader(files.OpenReadStream(), Encoding.Default))
            using (var csv = new CsvReader(reader,culture1))
            {
                foreach (var i in csv.GetRecords<ReadTestDto>())
                {
                    if (i.Question == ""|| i.OptionA == "" || 
                        i.OptionB == "" || i.OptionC == ""||
                        i.Answer==""||i.Complexity=="")
                    {
                        return false;
                    }                 
                    testQuestion = new TestQuestions(1, 1, i.Question,Convert.ToInt32(i.Complexity));
                    list_testQuestion.Add(testQuestion);
                    options.Add(i.OptionA);
                    options.Add(i.OptionB);
                    options.Add(i.OptionC);
                    foreach(var answers in options)
                    {
                        if (answers == i.Answer)
                        {
                            answer = new Answers(1, testQuestion.NumberOfIdentification, answers, true);
                            list_answer.Add(answer);
                        }
                        else
                        {
                            answer = new Answers(1, testQuestion.NumberOfIdentification, answers, false);
                            list_answer.Add(answer);
                        }
                    }
                    options = new List<string>();

                }
                testQuestionRepository.addTestsQuestions(list_testQuestion);
                answersRepository.SaveAnswers(list_answer);
                    return true;
            }
        }
    }
}
