using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VueJsSandbox.Controllers.Api
{
    public class ValidationResponse
    {
        public bool Valid { get; set; }
    }

    public class ValidationRequest
    {
        public string TeamName { get; set; }
    }

    [Route("api/[controller]")]
    public class TeamController : Controller
    {
        [HttpPost("Validate")]
        public IActionResult ValidateName([FromBody]ValidationRequest request)
        {
            bool isValid = false;

            if (request.TeamName == "stokes")
            {
                isValid = true;
            }
            var response = new ValidationResponse
            {
                Valid = isValid
            };

            return Json(response);
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
