using Craqudos.Dominio.Contratos;
using Craqudos.Dominio.Entidades;
using Craqudos.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Craqudos.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        private readonly CraqudosContext _craqudosContext;
        public UsuarioRepositorio(CraqudosContext craqudosContext) : base(craqudosContext)
        {
            _craqudosContext = craqudosContext;
        }

        public Usuario Obter(string login, string senha)
        {
            return _craqudosContext.Usuarios.FirstOrDefault(u => u.Login == login && u.Senha == senha);
        }

        public Usuario Obter(string login)
        {
            return _craqudosContext.Usuarios.FirstOrDefault(u => u.Login == login);
        }
    }
}
