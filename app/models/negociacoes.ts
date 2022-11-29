import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Negociacao[] = []; //Negociacao[] é = Array<Negociacao>

  public adicionar(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] { // readonly Negociacao[] é = ReadonlyArray<Negociacao>
    return this.negociacoes;
  }
}

