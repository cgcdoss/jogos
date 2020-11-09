import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private routing: AppRoutingModule) { }

  rotas: Routes = this.routing.routes;
}
