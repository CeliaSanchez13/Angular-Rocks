import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'info/:nombre', component: InfoComponent},

  { path: '**', redirectTo: 'principal' } //Pagina por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
