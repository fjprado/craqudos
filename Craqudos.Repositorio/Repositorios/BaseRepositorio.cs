using Craqudos.Dominio.Contratos;
using Craqudos.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Craqudos.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        protected readonly CraqudosContext _craqudosContext;
        public BaseRepositorio(CraqudosContext craqudosContext)
        {
            _craqudosContext = craqudosContext;
        }
        public void Adicionar(TEntity entity)
        {
            _craqudosContext.Set<TEntity>().Add(entity);
            _craqudosContext.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            _craqudosContext.Set<TEntity>().Update(entity);
            _craqudosContext.SaveChanges();
        }

        public void Dispose()
        {
            _craqudosContext.Dispose();
        }

        public TEntity ObterPorId(int id)
        {
            return _craqudosContext.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return _craqudosContext.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            _craqudosContext.Set<TEntity>().Remove(entity); /// confirmar se o delte estará funcionando
            _craqudosContext.SaveChanges();
        }
    }
}
