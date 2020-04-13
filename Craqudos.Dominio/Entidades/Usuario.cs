using System;
using System.Collections.Generic;
using System.Text;

namespace Craqudos.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public bool Administrador { get; set; }
        public virtual ICollection<Jogador> Jogadores { get; set; }
        public virtual ICollection<Equipe> Equipes { get; set; }
        public int QuantidadeJogadores { get; set; }
        public bool ContarGoleiro { get; set; }

        public override void Validar()
        {
            if (string.IsNullOrEmpty(Login))
                AdicionarExcecao("Crítica - Email deve ser informado.");
            if (string.IsNullOrEmpty(Senha))
                AdicionarExcecao("Crítica - Senha deve ser informada.");
            if (QuantidadeJogadores == 0)
                AdicionarExcecao("Deve ser informado quantidade de jogadores.");
            if (QuantidadeJogadores > 11 || QuantidadeJogadores < 4)
                AdicionarExcecao("Deve ser informado nível de ataque entre 4 e 11");
            if (ContarGoleiro.Equals(""))
                AdicionarExcecao("Deve informar se conta o goleiro ou não");
        }
    }
}
