import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Ingredient page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ingredient',
})

export class IngredientPage {

  constructor(public name: string, public amount: number) {}

  /*
  ionViewDidLoad() {
    console.log('ionViewDidLoad IngredientPage');
  }
  */

}
