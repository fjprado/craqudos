using Craqudos.Dominio.Entidades;
using Craqudos.Repositorio.Config;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Repositorio.Contexto
{
    public class CraqudosContext : DbContext
    {
        public DbSet<Jogador> Jogadores { get; set; }
        public DbSet<Equipe> Equipes { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<JogadorEquipe> JogadoresEquipe { get; set; }

        public CraqudosContext(DbContextOptions options) : base (options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new JogadorConfiguration());
            modelBuilder.ApplyConfiguration(new EquipeConfiguration());
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new JogadorEquipeConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}
