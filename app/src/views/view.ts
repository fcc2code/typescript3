export abstract class View<T> {

  protected elemento: HTMLElement;
  private escapar = false;

  // O ? logo após o parâmetro indica que ele é opcional. Parâmetros opcionais sempre devem vir após os obrigatórios
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLInputElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM. Verifique. `)
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.elemento.innerHTML = template;
  }

}