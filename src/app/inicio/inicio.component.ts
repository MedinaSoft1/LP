import { Component, OnInit,OnDestroy } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,OnDestroy {
  view= false;
  constructor() { }

  ngOnInit(): void {
    var char = require('../../assets/chat.js');
  }

  ngOnDestroy(){
    var close = require('../../assets/deleteChat.js');
  }


}
