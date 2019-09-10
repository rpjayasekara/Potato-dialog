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
    }else if(this.data["Yellowing of the lower leaves"] && this.data["Yellowing of the upper leaves"] && this.data["wilting of leaves"] && this.data["defoliation"] && this.data["Leaves become die"] && this.data["plants become die"] && this.data["stunted plants"]){
      this.finalOutput = " Fusarium wilt"
    }else if(this.data["Leaves become die"] && this.data["Brownish lessions on the leaves"] && this.data["concentric rings in a bull's eye pattern on the leaves"] && this.data["concentric rings on the leaves"] && this.data["Tissues sourounding the spots may turn yellow on the leaves"] && this.data["white spores can be seen on under side of the leaves"] && this.data[" lessions on the fruit"] && this.data["concentric rings present on the fruit"] && this.data["black spores on the fruit surface"] && this.data["black spores on the fruit surface"] && this.data["Imature fruits are drop"] && this.data["Girdling the plant near the soil line"] && this.data["lessions can be seen on the stem"]){
      this.finalOutput = "Early blight"
    }else if(this.data["wilting of leaves"] && this.data["defoliation"] && this.data["wilting of the whole plant"]){
      this.finalOutput = "Bacteria wilt"
    }else if(this.data["Yellowing of the lower leaves"] && this.data["defoliation"] && this.data["Water soaked gray green and dark spots"] && this.data["Small brown water soaked circular spots sourrounded with yellowish halo on leaves"] && this.data[" lessions on the fruit"] && this.data["Sunken and rough (scabby) surface on the fruits"] && this.data["Fruits have water soaked spots"] && this.data["Green fruits have  water soaked spots"] && this.data["bacterial spot and speck are identical"]){
      this.finalOutput = "Bacterial Leaf spot"
    }else if(this.data["Yellowing of the lower leaves"] && this.data["wilting of leaves"] && this.data["leaves become smaller than normal"] && this.data["partially roling of the edge of the leaves"] && this.data["stunted plants"] && this.data["whole plant look pale colour"]){
      this.finalOutput = "Tomato moassaic virus"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageFourPage');
  }

}
