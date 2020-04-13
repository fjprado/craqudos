using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Dominio.Entidades
{
    public class Jogador : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Posicao { get; set; }
        //public int UsuarioId { get; set; }
        //public virtual Usuario Usuario { get; set; }
        public int NivelAtaque { get; set; }
        public int NivelDefesa { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validar()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarExcecao("Jogador não pode ficar sem nome.");
            if (string.IsNullOrEmpty(Posicao))
                AdicionarExcecao("Jogador não pode ficar sem posição.");
            if (NivelAtaque == 0)
                AdicionarExcecao("Deve ser informado nível de ataque.");
            if (NivelAtaque > 10 || NivelAtaque < 0)
                AdicionarExcecao("Deve ser informado nível de ataque entre 0 e 10");
            if (NivelDefesa == 0)
                AdicionarExcecao("Deve ser informado nível de defesa.");
            if (NivelDefesa > 10 || NivelDefesa < 0)
                AdicionarExcecao("Deve ser informado nível de defesa entre 0 e 10");
        }
    }
}
