import { Component, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';

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
  public venceu: boolean = false;
  public perdeu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile = this.isMobileTeste();
  }

  envia(palavra: string) {
    if (palavra.trim().length > 0) {
      if (palavra.match("[0-9]")) {
        alert('Não é permitido colocar número');
        return;
      }
      palavra = this.removeAcentos(palavra);

      this.limpa();
      this.letras = palavra.trim().toLowerCase().split('');
      if (palavra.includes(' ')) {
        this.letras.forEach((l, i) => {
          if (l == ' ')
            this.letrasCorretas[i] = ' ';
        })
      }
    }

    localStorage.setItem('teste', 'testado');
  }

  adicionaLetra(letra: string) {
    if (this.letras.includes(letra)) {
      if (!this.letrasCorretas.includes(letra)) {
        this.letras.forEach((l, i) => {
          if (letra == l)
            this.letrasCorretas[i] = letra;
        });

        if (JSON.stringify(this.letras) == JSON.stringify(this.letrasCorretas))
          this.venceu = true;
      }
    } else {
      if (!this.letrasIncorretas.includes(letra)) {
        this.letrasIncorretas.push(letra);

        if (this.chances == 1)
          this.perdeu = true;
        this.chances--;
      }
    }

  }

  limpa() {
    this.letras = null;
    this.letrasIncorretas = [];
    this.letrasCorretas = [];
    this.chances = 6;
    this.venceu = false;
    this.perdeu = false;
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

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    localStorage.removeItem('teste');
    console.log(event);
  }

}
