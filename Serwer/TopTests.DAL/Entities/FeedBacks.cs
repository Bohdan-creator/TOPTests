using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
    public class FeedBacks:BaseEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Comment { get; set; }
        public string Name { get; set; }
        public Users Users { get; set; }
    }
}
