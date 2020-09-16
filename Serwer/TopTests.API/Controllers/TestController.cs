using CsvHelper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TopTests.Services.Models.Testy;

namespace TopTests.API.Controllers
{
    [Route("api/readFile")]
    [ApiController]
    public class TestController : Controller
    {
        public class Upload
        {
            public IFormFile files { get; set; }
        }
        [HttpPost]
        public IActionResult ReadFile([FromForm]Upload file)
        {
            var result = new StringBuilder();
            var files = file.files;
            CultureInfo culture1 = CultureInfo.CurrentCulture;
            using (TextReader reader = new StreamReader(files.OpenReadStream(), Encoding.Default))
            using (var csv = new CsvReader(reader, culture1))
            {
                var records = csv.GetRecords<ReadTestDto>();
                return Ok(records.ToList());
            }

        }
    }
}