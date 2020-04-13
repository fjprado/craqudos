using Craqudos.Dominio.Contratos;
using Craqudos.Dominio.Entidades;
using Craqudos.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Repositorio.Repositorios
{
    public class EquipeRepositorio : BaseRepositorio<Equipe>, IEquipeRepositorio
    {
        public EquipeRepositorio(CraqudosContext craqudosContext) : base(craqudosContext)
        {
        }
    }
}
