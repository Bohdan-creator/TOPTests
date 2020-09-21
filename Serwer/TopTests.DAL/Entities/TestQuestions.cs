using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
   public class TestQuestions
    {
        public int Id { get; set; }
        public int TopicId { get; set; }
        public int SubjectId { get; set; }
        public string Question { get; set; }
        public string NumberOfIdentification { get; set; } = Guid.NewGuid().ToString();
        public bool isDelete { get; set; }
        public TypeOfComplexity TypeOfComplexity { get; set; }
        public Topics Topics { get; set; }
        public Subjects Subjects { get; set; }
        public TestQuestions() { }
        public TestQuestions(int topicId,int subjectId,string question, int complexity)
        {
            TopicId = topicId;
            SubjectId = subjectId;
            Question = question;
            isDelete = false;
            TypeOfComplexity = (TypeOfComplexity)complexity;
        }

    }
}
