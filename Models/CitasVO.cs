using System;
using System.Collections.Generic;

namespace Citas.Models
{
    public partial class CitasVO
    {
        public int IdCita { get; set; }
        public string Nombre { get; set; }
        public DateTime? Fecha { get; set; }
        public string TipoConsulta { get; set; }
    }
}
