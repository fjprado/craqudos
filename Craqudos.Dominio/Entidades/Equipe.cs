using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Craqudos.Dominio.Entidades
{
    public class Equipe : Entidade
    {
        public int Id { get; set; }
        public DateTime DataSorteio { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public virtual ICollection<JogadorEquipe> JogadoresEquipe { get; set; }

        public override void Validar()
        {
            //if (!Jogadores.Any())
            //    AdicionarExcecao("Uma equipe deve possuir ao menos um jogador.");
        }
    }
}
