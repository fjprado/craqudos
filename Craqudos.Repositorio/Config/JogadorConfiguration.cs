using Craqudos.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Repositorio.Config
{
    public class JogadorConfiguration : IEntityTypeConfiguration<Jogador>
    {
        public void Configure(EntityTypeBuilder<Jogador> builder)
        {
            builder.HasKey(j => j.Id);
            builder.Property(j => j.Nome).IsRequired().HasMaxLength(70);
            builder.Property(j => j.Posicao).IsRequired().HasMaxLength(20);
            builder.Property(j => j.NivelAtaque).IsRequired();
            builder.Property(j => j.NivelDefesa).IsRequired();
            //builder.HasOne(j => j.Usuario);
        }
    }
}
