using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
    public class Answers
    {
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public string NumberOfIdentificationQuestion { get; set; }
        public string Option { get; set; }
        public bool isCorrect { get; set; }
        public bool isDelete { get; set; }
        public Answers() { }
        public Answers(int subjectId,string numberOfidentification,string option,bool iscorrect)
        {
            SubjectId = subjectId;
            NumberOfIdentificationQuestion = numberOfidentification;
            Option = option;
            isCorrect = iscorrect;
        }
    }
}
