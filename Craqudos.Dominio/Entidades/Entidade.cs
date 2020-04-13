using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Craqudos.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagemValidacao { get; set; }
        private List<string> MensagemValidacao
        {
            get { return _mensagemValidacao ?? (_mensagemValidacao = new List<string>()); }
        }

        public void LimparMensagens()
        {
            MensagemValidacao.Clear();
        }

        public void AdicionarExcecao(string mensagem)
        {
            MensagemValidacao.Add(mensagem);
        }

        public string ObterMensagensValidacao()
        {
            return string.Join(". ", MensagemValidacao);
        }

        public abstract void Validar();

        public bool Valido
        { 
            get { return !MensagemValidacao.Any(); }
        }
    }
}
