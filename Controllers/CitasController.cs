using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Citas.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Citas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CitasController : ControllerBase
    {
        private readonly ICitasRepository repository;
        public CitasController(ICitasRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult<List<CitasVO>> GetCitas()
        {
            return repository.GetCitas();
        }

        [HttpPost]
        public ActionResult<Models.CitasVO> Add([FromBody] Models.CitasVO cita)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var post = this.repository.Add(cita);
            if (post)
            {
                return Ok();
            }
            return BadRequest(ModelState);
        }
    }
}