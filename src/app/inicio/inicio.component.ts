import { Component, OnInit,OnDestroy } from '@angular/core';
import { ScriptService } from '../chat.service';
import { Subscription, Subject } from 'rxjs';

declare var openChat: any; 
declare var hideChat: any; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,OnDestroy {
//referencia suscripción a al observable
private suscripcion$:Subscription;
//observable recibe desde evento cambiar actualizaciones
private observer = new Subject<boolean>();
//visible o no visible
view:boolean;
//spinner
spinner:boolean;
//servicio que carga configuración 
  constructor(private chat: ScriptService) { }
//inicializa suscripción
  ngOnInit(): void {
    this.view = false;
   this.suscripcion$ = this.observer.subscribe(data=>{
      if(data == true){
        this.callChat();
      }
      else{
        this.close();
      }
    })
  }
  //cerrmos chat y unsuscribe
  ngOnDestroy(){
    this.suscripcion$.unsubscribe();
    this.close();
  }
//servicio que carga script para apertura
  callChat(){
    this.spinner = true;
    this.chat.load('script').then(() => {
      openChat();
      this.spinner = false;
  }).catch(error => console.log(error));
  }
//servicio que carga script para cierre
  close(){
    this.chat.load('delete').then(() => {
      hideChat();
    }).catch(error => console.log(error));
  }
//camvbiar estado de vista 
  cambiar(){
    this.view = !this.view;
    this.observer.next(this.view);
  }
}
