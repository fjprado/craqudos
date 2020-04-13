namespace Craqudos.Dominio.Entidades
{
    public class JogadorEquipe: Entidade
    {
        public int Id { get; set; }
        public int JogadorId { get; set; }

        public override void Validar()
        {
            if(JogadorId == 0)
            {
                AdicionarExcecao("Não foi identificado qual a referência do jogador.");
            }
        }
    }
}