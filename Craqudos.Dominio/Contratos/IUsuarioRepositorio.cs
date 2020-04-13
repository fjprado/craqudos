using Craqudos.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Dominio.Contratos
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario>
    {
        Usuario Obter(string login, string senha);
        Usuario Obter(string login);
    }
}
