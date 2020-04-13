using Craqudos.Dominio.Contratos;
using Craqudos.Dominio.Entidades;
using Craqudos.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Repositorio.Repositorios
{
    public class JogadorRepositorio : BaseRepositorio<Jogador>, IJogadorRepositorio
    {
        private readonly CraqudosContext _craqudosContext;
        public JogadorRepositorio(CraqudosContext craqudosContext) : base(craqudosContext)
        {
            _craqudosContext = craqudosContext;
        }
    }
}
