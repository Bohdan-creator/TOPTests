using System;
using System.Collections.Generic;
using System.Text;

namespace TopTests.Services.Models.Users
{
    public class SendEmailToResetPasswordDto
    {
        public string Email { get; set; }
        public string CodeOfVerification { get; set; }
    }
}
