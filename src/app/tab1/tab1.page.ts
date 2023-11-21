import { Component } from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  cantidad : string;
  resultado : number;

  constructor() {}

  calcular(){
    this.resultado = parseFloat(this.cantidad) / 8.0; 
  }

}
