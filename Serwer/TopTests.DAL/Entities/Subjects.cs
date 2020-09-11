using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
    public class Subjects
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool isDelete { get; set; }
        public Subjects(string name)
        {
            Name = name;
        }
    }
}
