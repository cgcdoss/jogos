import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.component.html',
  styleUrls: ['./forca.component.scss']
})
export class ForcaComponent implements OnInit {

  @ViewChild('novaLetra') novaLetra;

  public letras: string[];
  public letrasCorretas: string[] = [];
  public letrasIncorretas: string[] = [];
  public chances: number = 6;
  public tipo: string = 'password';
  public textoBotao: string = 'Exibir';
  public teclas: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  public isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile = this.isMobileTeste();
  }

  envia(palavra: string) {
    if (palavra.length > 0) {
      if (palavra.match("[0-9]")) {
        alert('Não é permitido colocar número');
        return;
      }
      palavra = this.removeAcentos(palavra);

      this.limpa();
      this.letras = palavra.toLowerCase().split('');
      if (palavra.includes(' ')) {
        this.letras.forEach((l, i) => {
          if (l == ' ')
            this.letrasCorretas[i] = ' ';
        })
      }
    }
  }

  adicionaLetra(letra: string) {
    if (!this.validaLetra(letra))
      return;

    letra = letra.toLowerCase();

    if (this.letras.includes(letra)) {
      this.letras.forEach((l, i) => {
        if (letra == l)
          this.letrasCorretas[i] = letra;
      });

      if (JSON.stringify(this.letras) == JSON.stringify(this.letrasCorretas))
        alert('Parabéns');
    } else {
      this.letrasIncorretas.push(letra);

      if (this.chances == 1)
        alert('Você foi enforcado x.x');
      this.chances--;
    }

  }

  private validaLetra(letra): boolean {
    if (!letra) {
      alert('É necessário informar uma letra')
      return false;
    }
    letra = letra.toLowerCase();

    if (letra.length > 1) {
      alert('Só é possível adicionar uma letra por vez');
      return false;
    }
    if (!letra.match("[a-z]")) {
      alert('Apenas letras são permitidas')
      return false;
    }
    if (this.chances == 0) {
      alert('Todas as 6 chances foram esgotadas')
      return false;
    }
    if (this.letrasCorretas.includes(letra) || this.letrasIncorretas.includes(letra)) {
      alert('Essa letra já foi adicionada anteriormente');
      return false;
    }

    return true;
  }

  limpa() {
    this.letras = null;
    this.letrasIncorretas = [];
    this.letrasCorretas = [];
    this.chances = 6;
  }

  getImgSrc() {
    return `/assets/forca/forca${(7 - this.chances)}.png`;
  }

  alternaTipo() {
    this.tipo = this.tipo == 'password' ? 'text' : 'password';
    this.textoBotao = this.textoBotao == 'Exibir' ? 'Ocultar' : 'Exibir';
  }

  private isMobileTeste(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  private removeAcentos(str: string): string {
    // str = str.normalize("NFD").replace(/[^a-zA-Zs]/, "");
    const strng = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç';
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

}
