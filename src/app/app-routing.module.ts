import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForcaComponent } from './forca/forca.component';


const routes: Routes = [{
  path: 'forca', component: ForcaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public routes = routes;
}
