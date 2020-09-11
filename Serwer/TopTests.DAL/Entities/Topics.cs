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
        public Subjects Subjects { get; set; }
        public bool isDelete { get; set; }
    }
}
