import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.component.html',
  styleUrls: ['./forca.component.scss']
})
export class ForcaComponent implements OnInit {

  @ViewChildren('letraIncorreta') letraIncorreta//: NgModel;

  public palavra: string;
  public letras: string[];
  public letrasIncorretas: string[] = [];
  public chances: number = 6;

  constructor() { }

  ngOnInit(): void {
  }

  envia() {
    this.letras = this.palavra.split('');
  }

  adicionaLetraIncorreta(letra: string) {
    if (!letra) {
      alert('É necessário informar uma letra')
      return;
    }

    if (this.chances == 0) {
      alert('Todas as 6 chances foram esgotadas')
      return;
    }

    this.letrasIncorretas.push(letra);
    this.chances--;
  }

  limpa() {
    this.palavra = null;
    this.letras = null;
    this.letrasIncorretas = [];
    this.chances = 6;
  }

  getImgSrc() {
    return `/assets/forca/forca${(7 - this.chances)}.png`;
  }

}
