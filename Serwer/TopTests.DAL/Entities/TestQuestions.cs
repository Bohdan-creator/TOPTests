using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
   public class TestQuestions
    {
        public int Id { get; set; }
        public int TopicId { get; set; }
        public string Answer { get; set; }
        public string Description { get; set; }
        public Topics Topics { get; set; }
        public bool isDelete { get; set; }
    }
}
