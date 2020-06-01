import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path:'chat',component:ChatComponent},
  {path:'',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
