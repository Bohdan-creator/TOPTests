using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
   public class Topics
    {
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public string Name { get; set; }
        public bool isDelete { get; set; }
        public Subjects Subjects { get; set; }
        public List<Test> Tests { get; set; }
        public Topics(int subjectId , string name)
        {
            SubjectId = subjectId;
            Name = name;
        }
        public Topics(string name)
        {
            Name = name;
        }
    }
}
