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

  constructor() { }

  ngOnInit(): void {
  }

  envia(palavra: string) {
    if (palavra.length > 0) {
      this.limpa();
      this.letras = palavra.toLowerCase().split('');
    }
  }

  adicionaLetra(letra: string) {
    if (!this.validaLetra(letra))
      return;

    letra = letra.toLowerCase();
    
    if (this.letras.includes(letra))
      this.letrasCorretas.push(letra);
    else {
      this.letrasIncorretas.push(letra);

      if (this.chances == 1)
        alert('Você foi enforcado x.x');
      this.chances--;
    }

  }

  private validaLetra(letra: string): boolean {
    if (!letra) {
      alert('É necessário informar uma letra')
      return false;
    }

    if (this.chances == 0) {
      alert('Todas as 6 chances foram esgotadas')
      return false;
    }

    if (this.letrasCorretas.includes(letra) || this.letrasIncorretas.includes(letra)) {
      this.novaLetra.value = '';
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

}
