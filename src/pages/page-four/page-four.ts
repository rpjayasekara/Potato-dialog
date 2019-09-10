import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-four',
  templateUrl: 'page-four.html',
})
export class PageFourPage {

  public data = {}
  public finalOutput :string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get("data")

    if(this.data["plants become die"] && this.data["seedlings are killed just before they reach the soil surface"] && this.data["Seedlings topple over collapse"] && this.data["Collar of the seedlings are soft and water soaked."]){
      this.finalOutput = "Damping off"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageFourPage');
  }

}
