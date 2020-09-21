﻿using System;
using System.Collections.Generic;
using System.Text;
using TopTests.DAL.Entities;

namespace TopTests.DAL.Interfaces
{
    public interface IAnswersRepository : IRepositoryBase<Answers>
    {
        void SetValueIsDelete(int id);
        void SaveAnswers(List<Answers> answers);
    }
}