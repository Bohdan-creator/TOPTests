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
        public int TestId { get; set; }
        public int SubjectId { get; set; }
        public int Rating { get; set; }
        public Users Users { get; set; }
        public Topics Topics { get; set; }
        public Subjects Subjects { get; set; }

        public Results() { }
        public Results(int userId,int testId,int topicId,int subjectId,int score)
        {
           // DateCreated = DateTime.Now;
            UserId = userId;
            TestId = testId;
            TopicId = topicId;
            SubjectId = subjectId;
            Rating = score;
        }
    }
}
