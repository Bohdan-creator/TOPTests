using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
    public class Answers
    {
        public int Id { get; set; }
        public int TestQuestionsId{get;set ;}
        public int SubjectId { get; set; }
        public string Answer { get; set; }
        public bool isCorrect { get; set; }
        public bool isDelete { get; set; }
        public TestQuestions TestQuestions { get; set; }
        public Subjects Subjects { get; set; }
    }
}
