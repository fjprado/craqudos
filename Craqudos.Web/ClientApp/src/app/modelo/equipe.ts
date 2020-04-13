import { JogadorEquipe } from "./jogadorEquipe";

export class Equipe {
  public id: number;
  public dataSorteio: Date;
  public configuracaoId: number;
  //public usuarioId: number;
  public jogadoresEquipe: JogadorEquipe[];

  constructor() {
    this.jogadoresEquipe = [];
  }
}
