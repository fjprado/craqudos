using Craqudos.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Repositorio.Config
{
    public class JogadorEquipeConfiguration : IEntityTypeConfiguration<JogadorEquipe>
    {
        public void Configure(EntityTypeBuilder<JogadorEquipe> builder)
        {
            builder.HasKey(je => je.Id);
            builder.Property(je => je.JogadorId).IsRequired();
        }
    }
}
