using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopTests.Services.Models.Tokens;
using TopTests.Services.Models.Users;

namespace TopTests.Services.Interfaces
{
    public interface IAuthorizationService
    {
        Task<RegisterUserDto> RegisterUser(RegisterUserDto registerUserDto);
        Task<TokenDto> SignIn(SignInDto signInDto);
        Task<bool> ConfirmRegistration(string code);
        Task<bool> SendLinkToResetPassword(SendEmailToResetPasswordDto sendEmailTo);
        Task<bool> ResetPassword(string code, ResetPasswordDto resetPassword);

    }
}
