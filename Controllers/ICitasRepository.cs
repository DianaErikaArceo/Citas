using Citas.Models;
using System.Collections.Generic;

namespace Citas.Controllers
{
    public interface ICitasRepository
    {
        List<CitasVO> GetCitas();

        bool Add(Models.CitasVO citas);
    }
}