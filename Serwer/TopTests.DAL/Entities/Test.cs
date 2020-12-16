using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.DAL.Entities
{
    public class Test
    {
        public int Id { get; set; }
        public int SubjectId { get; set; }
        public string Name { get; set; }
        public TypeOfTest TypeOfTest { get; set; }
        public string AdditionalInfo { get; set; }
        public int TimeOfTest { get; set; }
        public bool isDelete { get; set; }
        public Subjects Subjects { get; set; }
        public Test() { }
        public Test(int subjectId, string additionalinfo,string name,int typeTest,string timeOfTest)
        {
            AdditionalInfo = additionalinfo;
            SubjectId = subjectId;
            Name = name;
            TypeOfTest = (TypeOfTest)typeTest;
            TimeOfTest = Int32.Parse(timeOfTest);
        } 
    }
}
