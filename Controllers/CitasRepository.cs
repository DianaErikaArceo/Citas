using Citas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Citas.Controllers
{
    public class CitasRepository : ICitasRepository
    {
        private ExamContext dbContext;

        public CitasRepository(ExamContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public List<CitasVO> GetCitas()
        {
            return dbContext.Citas.ToList();
        }

        public bool Add(Models.CitasVO citas)
        {
            dbContext.Citas.Add(citas);
            dbContext.SaveChanges();
            return true;
        }
    }
}
