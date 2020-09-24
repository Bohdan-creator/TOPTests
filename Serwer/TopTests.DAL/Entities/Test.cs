using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
    public class Test
    {
        public int Id { get; set; }
        public int TopicId { get; set; }
        public int SubjectId { get; set; }
        public string Name { get; set; }
        public bool isDelete { get; set; }
        public Test() { }
        public Test(int topicId,int subjectId,string name)
        {
            TopicId = topicId;
            SubjectId = subjectId;
            Name = name;
        } 
    }
}
