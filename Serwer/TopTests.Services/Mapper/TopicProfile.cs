using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using TopTests.DAL.Entities;
using TopTests.Services.Models.Topics;

namespace TopTests.Services.Mapper
{
   public class TopicProfile:Profile
    {
        public TopicProfile()
        {
            CreateMap<Topics, RegisterTopicDto>();
            CreateMap<Topics, EditTopicDto>();
        }
    }
}
