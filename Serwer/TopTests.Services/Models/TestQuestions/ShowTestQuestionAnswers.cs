using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.Services.Models.TestQuestions
{
   public class ShowTestQuestionAnswers
    {
        public string QuestionId { get; set; }
        public string Question { get; set; }
        public List<string> Option { get; set; } = new List<string>();
    }
}
