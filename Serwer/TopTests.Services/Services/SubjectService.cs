using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;
using TopTests.Services.Interfaces;
using TopTests.Services.Models.Subjects;

namespace TopTests.Services.Services
{
    public class SubjectService : ISubjectService
    {
        private readonly ISubjectRepository subjectRepository;
        private readonly ITopicsRepository topicsRepository;
        private readonly ITestQuestionRepository testQuestionRepository;
        private readonly IAnswersRepository answersRepository;
        private readonly IMapper mapper;
        public SubjectService(ISubjectRepository subjectRepository, IMapper mapper,
                              ITopicsRepository topicsRepository,
                              ITestQuestionRepository testQuestionRepository,
                              IAnswersRepository answersRepository)
        {
            this.subjectRepository = subjectRepository;
            this.mapper = mapper;
            this.topicsRepository = topicsRepository;
            this.testQuestionRepository = testQuestionRepository;
            this.answersRepository = answersRepository;
        }

        public async Task<EditSubjectDto> EditSubject(int id, EditSubjectDto editSubjectDto)
        {
            if (editSubjectDto == null)
            {
                return null;
            }
            var subject = await subjectRepository.GetSubjectById(id);
            if (subject == null)
            {
                return null;
            }
            subject.Name = editSubjectDto.Name;
            subjectRepository.Update(subject);
            await subjectRepository.SaveChangesAsync();
            return mapper.Map<EditSubjectDto>(subject);
        }

        public async Task<RegisterSubjectDto> RegisterSubject(RegisterSubjectDto registerSubject)
        {
            if (registerSubject == null)
            {
                return null;
            }
            var subject = new Subjects(registerSubject.Name);
            subjectRepository.Create(subject);
            await subjectRepository.SaveChangesAsync();
            return mapper.Map<RegisterSubjectDto>(subject);
        }

        public async Task<bool> DeleteSubject(int id)
        {
            var subject = await subjectRepository.GetSubjectById(id);
            subject.isDelete = true;
            if (subject == null)
            {
                return false;
            }
            topicsRepository.SetValueIsDelete(subject.Id);
            testQuestionRepository.SetValueIsDelete(subject.Id);
            answersRepository.SetValueIsDelete(subject.Id);
            subjectRepository.Update(subject);
            await subjectRepository.SaveChangesAsync();
            await topicsRepository.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<SubjectDto>> GetAllSubjects()
        {
            var subjects = await subjectRepository.GetSubjects();
            if (subjects == null)
            {
                return null;
            }
            return mapper.Map<IEnumerable<SubjectDto>>(subjects);
        }

        public async Task<IEnumerable<SubjectDto>> GetAllDeletedSubjects()
        {
            var subjects = await subjectRepository.GetDeleteSubjects();
            if (subjects == null)
            {
                return null;
            }
            return mapper.Map<IEnumerable<SubjectDto>>(subjects);
        }

        public async Task<SubjectDto> RestoreSubject(int id)
        {
            var subject = await subjectRepository.GetDeleteSubjectById(id);
            if (subject == null)
            {
                return null;
            };
            subject.isDelete = false;
            topicsRepository.RestoreTopics(id);
            subjectRepository.Update(subject);
            await subjectRepository.SaveChangesAsync();
            await topicsRepository.SaveChangesAsync();
            return mapper.Map<SubjectDto>(subject);
        }
    }
}
