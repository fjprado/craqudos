using Craqudos.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);
            builder.Property(u => u.Login).IsRequired();
            builder.Property(u => u.Nome).IsRequired().HasMaxLength(100);
            builder.Property(u => u.Senha).IsRequired();
            builder.Property(u => u.QuantidadeJogadores).IsRequired();
            builder.Property(u => u.ContarGoleiro).IsRequired();
            //builder.HasMany(u => u.Jogadores)
            //    .WithOne(p => p.Usuario);
            builder.HasMany(u => u.Equipes)
                .WithOne(p => p.Usuario);
        }
    }
}
