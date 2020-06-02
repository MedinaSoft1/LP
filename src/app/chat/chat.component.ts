import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../chat.service';

declare var hideChat: any; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit{

  constructor(private chat: ScriptService) {
}

  ngOnInit(): void {
    this.close();
  }

//servicio que carga script para cierre
close(){
  this.chat.load('delete').then(() => {
    hideChat();
  }).catch(error => console.log(error));
}





}