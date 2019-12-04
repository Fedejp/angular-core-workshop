import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';



const routes: Routes = [
    { path:'', component : LoginComponent },
    { path: '**', redirectTo: '' , pathMatch: 'full'} //Si se trata de ir a una ruta que no existe, va al root por default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
