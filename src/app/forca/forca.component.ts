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
  public chances: number = 7;

  constructor() { }

  ngOnInit(): void {
  }

  envia() {
    this.letras = this.palavra.split('');
  }

  adicionaLetraIncorreta(letra: string) {
    this.letrasIncorretas.push(letra);
    this.chances--;
  }

  limpa() {
    this.palavra = '';
    this.letras = [];
    this.letrasIncorretas = [];
    this.chances = 7;
  }

}
