using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
   public class Results:BaseEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int TopicId { get; set; }
        public int SubjectId { get; set; }
        public int Rating { get; set; }
        public Users Users { get; set; }
        public Topics Topics { get; set; }
        public Subjects Subjects { get; set; }
    }
}
