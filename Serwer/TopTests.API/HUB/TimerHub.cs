using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TopTests.DAL.Entities;
using TopTests.DAL.Interfaces;

namespace TopTests.API.HUB
{
    public class TimerHub:Hub
    {
        private readonly ITimeRemainingRepository timeRemainingRepository;

        public TimerHub(ITimeRemainingRepository timeRemainingRepository)
        {
            this.timeRemainingRepository = timeRemainingRepository;
        }
        public async Task CheckDatesAndShow()
        {
            var time =   timeRemainingRepository.GetTimetOfTest(22); 
            var times = time.EndTest - DateTime.Now;
           await  Clients.Caller.SendAsync("sendToAll", ((times.Hours * 60) + times.Minutes).ToString(),times.Seconds.ToString());
        }
    }
}
