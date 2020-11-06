using CsvHelper;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.TestQuestions;
using TopTests.Services.Models.Testy;

namespace TopTests.Services.Services
{
    public class TestQuestionsService : ITestQuestionsService
    {
        private readonly ITopicsRepository topicsRepository;
        private readonly IAnswersRepository answersRepository;
        private readonly ITestRepository testRepository;
        private readonly ITestQuestionRepository testQuestionRepository;
        public TestQuestionsService(ITopicsRepository topicsRepository, IAnswersRepository answersRepository,
                           ITestQuestionRepository testQuestionRepository, ITestRepository testRepository)
        {
            this.topicsRepository = topicsRepository;
            this.answersRepository = answersRepository;
            this.testQuestionRepository = testQuestionRepository;
            this.testRepository = testRepository;
        }

        public async Task<bool> DeleteTestQuestion(int id)
        {
            var question = await testQuestionRepository.GetQuestion(id);
            if (question == null)
            {
                return false;
            }
            question.isDelete = true;
            answersRepository.SetValueIsDeleteOnQuestion(question.NumberOfIdentification);
            testQuestionRepository.Update(question);
            await testQuestionRepository.SaveChangesAsync();
            return true;
        }

        public async Task<bool> EditTestQuestion(int id, EditQuestionDto editQuestionDto)
        {
            var question = await testQuestionRepository.GetQuestion(id);
            question.Question = editQuestionDto.Question;
            var answers = await answersRepository.GetAnswersForQuestion(question.NumberOfIdentification);
            List<string> editAnswers = new List<string>();
            editAnswers.Add(editQuestionDto.OptionA);
            editAnswers.Add(editQuestionDto.OptionB);
            editAnswers.Add(editQuestionDto.OptionC);
            for (int i = 0; i< editAnswers.Count; i++)
            {
                answers[i].Option = editAnswers[i]; 
            }
            if (question == null || editQuestionDto.Question == "")
            {
                return false;
            }
            testQuestionRepository.Update(question);
            await testQuestionRepository.SaveChangesAsync();
            return true;
        }

        public async Task<ErrorTestDto> ReadTestQuestions(int id, UploadFile uploadFile)
        {
            ErrorTestDto errorTestDto = new ErrorTestDto();
            var files = uploadFile.formFile;
            var list_testQuestion = new List<TestQuestions>();
            var list_answer = new List<Answers>();
            var options = new List<string>();
            CultureInfo culture1 = CultureInfo.CurrentCulture;
            using (TextReader reader = new StreamReader(files.OpenReadStream(), Encoding.UTF8))
            using (var csv = new CsvReader(reader, culture1))
            {
                foreach (var i in csv.GetRecords<ReadTestDto>())
                {
                    if (i.Question == "" || i.OptionA == "" ||
                        i.OptionB == "" || i.OptionC == "" ||
                        i.Answer == "" || i.Complexity == "")
                    {
                        errorTestDto.FieldEmpty = 400;
                        return errorTestDto;
                    }
                    var test = await testRepository.GetTest(id);
                    var testQuestion = new TestQuestions(test.Id, test.TopicId, test.SubjectId, i.Question);
                    var check_question = await testQuestionRepository.CheckIfQuestionExist(testQuestion);
                    if (check_question != null)
                    {
                        errorTestDto.QuestionExist = 400;
                        return errorTestDto;
                    }
                    list_testQuestion.Add(testQuestion);
                    options.Add(i.OptionA);
                    options.Add(i.OptionB);
                    options.Add(i.OptionC);
                    foreach (var answers in options)
                    {
                        if (answers == i.Answer)
                        {
                            var answer = new Answers(test.SubjectId, test.TopicId, test.Id, testQuestion.NumberOfIdentification, answers, true);
                            list_answer.Add(answer);
                        }
                        else
                        {
                            var answer = new Answers(test.SubjectId, test.TopicId, test.Id, testQuestion.NumberOfIdentification, answers, false);
                            list_answer.Add(answer);
                        }
                    }
                    options = new List<string>();

                }
                testQuestionRepository.AddTestsQuestions(list_testQuestion);
                answersRepository.SaveAnswers(list_answer);
                return errorTestDto;
            }

        }

        public async Task<RegisterTestQuestionDto> RegisterTestQuestion(RegisterTestQuestionDto registerTestQuestionDto)
        {
            if (registerTestQuestionDto == null)
            {
                return null;
            }
            var testQuestion = new TestQuestions(Int32.Parse(registerTestQuestionDto.TestId), Int32.Parse(registerTestQuestionDto.TopicId),
                                                 Int32.Parse(registerTestQuestionDto.SubjectId), registerTestQuestionDto.Question);
            List<bool> isCorrect = new List<bool>();
            isCorrect.Add(registerTestQuestionDto.isCorrectOptionA);
            isCorrect.Add(registerTestQuestionDto.isCorrectOptionB);
            isCorrect.Add(registerTestQuestionDto.isCorrectOptionC);
            List<string> option = new List<string>();
            option.Add(registerTestQuestionDto.OptionA);
            option.Add(registerTestQuestionDto.OptionB);
            option.Add(registerTestQuestionDto.OptionC);
            List<Answers> answers = new List<Answers>();
            for (int i = 0; i < 3; i++) {
                answers.Add(new Answers(Int32.Parse(registerTestQuestionDto.SubjectId), Int32.Parse(registerTestQuestionDto.SubjectId),
                                            Int32.Parse(registerTestQuestionDto.SubjectId), testQuestion.NumberOfIdentification,
                                             option[i],isCorrect[i]));
            }
            testQuestionRepository.Create(testQuestion);
            answersRepository.SaveAnswers(answers);
            await testQuestionRepository.SaveChangesAsync();
            return registerTestQuestionDto;
        }

        public async Task<bool> RestoreTestQuestion(int id)
        {
            var question = await testQuestionRepository.RestoreQuestion(id);
            if (question == null)
            {
                return false;
            }
            question.isDelete = false;
            answersRepository.SetValueIsNotDeleteOnQuestion(question.NumberOfIdentification);
            testQuestionRepository.Update(question);
            await testQuestionRepository.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<ShowTestQuestionAnswers>> ShowAllDeletedTestQuestions(int TestId)
        {
            var test = await testRepository.GetTest(TestId);
            if (test == null)
            {
                return null;
            }
            var list = new List<ShowTestQuestionAnswers>();
            if (test == null)
            {
                return null;
            }
            var questions = await testQuestionRepository.GetAllDeletedTestQuestions(TestId);
            if (questions == null)
            {
                return null;
            }
            foreach (var testQuestion in questions)
            {
                ShowTestQuestionAnswers show = new ShowTestQuestionAnswers();
                show.QuestionId = testQuestion.Id.ToString();
                show.Question = testQuestion.Question;
                var answers = await answersRepository.GetDeletedAnswersForQuestion(testQuestion.NumberOfIdentification);
                if (answers == null)
                {
                    return null;
                }
                foreach (var listAnswers in answers)
                {
                    show.Option.Add(listAnswers.Option);
                }
                list.Add(show);
            }
            return list;
        }

        public async Task<IEnumerable<ShowTestQuestionAnswers>> ShowTestQuestion(int TestId)
        {
            var test = await testRepository.GetTest(TestId);
            if (test == null)
            {
                return null;
            }
            var list = new List<ShowTestQuestionAnswers>();
            if (test == null)
            {
                return null;
            }
            var questions = await testQuestionRepository.GetAllTestQuestions(TestId);
            if (questions == null)
            {
                return null;
            }
            foreach (var testQuestion in questions)
            {
                ShowTestQuestionAnswers show = new ShowTestQuestionAnswers();
                show.QuestionId = testQuestion.Id.ToString();
                show.Question = testQuestion.Question;
                var answers = await answersRepository.GetAnswersForQuestion(testQuestion.NumberOfIdentification);
                if (answers == null)
                {
                    return null;
                }
                foreach (var listAnswers in answers)
                {
                    show.Option.Add(listAnswers.Option);
                }
                list.Add(show);
            }
            return list;
        }
    }
}
