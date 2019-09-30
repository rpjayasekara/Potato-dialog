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
  public symptoms = []
  public temp = 0
  public finalOutput :string
  public d1 = [64,70,74,78]
  public d2 = [1,2,11,12,13,78,81]
  public d3 = [13,14,15,16,20,24,47,50]
  public d4 = [11,12,80]
  public d5 = [1,12,17,22,47,56,57,87]
  public d6 = [1,11,26,29,81,82]
  public d7 = [1,2,28,36,40,67,81,82,85]
  public d8 = [1,5,11,23,48,50,88]
  public d9 = [47,51,55,59]
  public d10 = [57,78,80]
  public d11 = [60]
  public d12 = [1,47,49,56,75,86]
  public d13 = [1,3,13,38,77,85]
  public d14 = [1,2,3,27,42,47,61,68,69,80]
  public d15 = [1,2,25,36,37,40,42,65,81]
  public d16 = [12, 38]
  public d17 = [71,84,88]
  public d18 = [17]
  public d19 = [19]
  public d20 = [1,8,55]
  public d21 = [1,9,42,65,81]
  public d22 = [2,27,36,41,43]
  public d23 = [1,2,4,7,32,40]
  public d24 = [1, 43]
  public  d25 = [6, 42, 43]
  public d26 = [1,2,7]
  public d27 = [2,33,43]
  public d28 = [1,2,11,25,40]
  public d29 = [42,52,62,80]
  public d30 = [1,2,10,27,30,31,42]
  public d31 = [1,2,10,31]
  public d32 = [12, 63]
  public d33 = [1,2,18]
  public d34 = [2, 12, 34]
  public d35 = [35,44,45]
  public d36 = [5,11,46]
  public d37 = [83]
  public d38 = [1,2,73,77,80]
  public deseaes = [this.d1, this.d2,this.d3,this.d4,this.d5,this.d6,this.d7,this.d8,this.d9,this.d10,this.d11,this.d12,this.d13,this.d14,this.d15,this.d16,this.d17,this.d18,this.d19,this.d20,this.d21,this.d22,this.d23,this.d24,this.d25,this.d26,this.d27,this.d28,this.d29,this.d30,this.d31,this.d32,this.d33,this.d34,this.d35,this.d36,this.d37,this.d38]
  public precentages = []
  public di_precentages = {}
  public names = ["Damping off", "Fusarium wilt", "Early blight", " Bacteria wilt", "Bacterial Leaf spot", "Tomato moassaic virus", "Leaf curl virus", "Spotted wilt", " Gray Mould", " Bacterial soft rot and hollow stem", "Phoma Rot", "Anthracnose", "Downy mildew", "Canker disease", "Bunchi top ", "powdery mildew", "White mold", "late blight", "Septorial leaf spot", "Nitrogen", "phophoros", "potassium", "sulphur", "magnisium", "manganese", "molybdinum", "zinc", "boron", "calcium", "copper", "iron", "iron", "whitefly", "leaf miner", "thrips", "mite", "blister beetle", "nematodes"]
  public output = []

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

    this.temp=0

    for (var key in this.data) {
      this.temp++
      if (this.data.hasOwnProperty(key)) {
        console.log(this.temp + " -> " +key);
        if(this.data[key]){
          this.symptoms.push(this.temp)
        }
      }
    }

    this.temp=0
    for (let i=0; i<this.deseaes.length; i++){
      this.temp=0
      for (let j=0; j<this.deseaes[i].length; j++){
        if(this.symptoms.includes(this.deseaes[i][j])){
          this.temp++
        }

      }
      this.precentages.push((this.temp/this.deseaes[i].length)*100)
      this.di_precentages[(this.temp/this.deseaes[i].length)*100]=this.names[i]
      this.precentages = this.precentages.sort((a, b) => b - a)
      console.log(this.temp)
    }
    console.log(this.symptoms)
    console.log(this.di_precentages)
    console.log(this.precentages)

    for(let i=0; i<3; i++){
      let result = {}
      result["name"] = this.di_precentages[this.precentages[i]]
      result["precentage"] = Math.round(this.precentages[i] * 100) / 100
      this.output.push(result)
    }

    console.log(this.output)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageFourPage');
  }

}
