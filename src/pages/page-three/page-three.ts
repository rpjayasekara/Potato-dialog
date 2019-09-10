import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {leave} from "@angular/core/src/profile/wtf_impl";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageFourPage} from "../page-four/page-four"


/**
 * Generated class for the PageThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-three',
  templateUrl: 'page-three.html',
})
export class PageThreePage {

  public leave = {}
  public fruit = {}
  public stem = {}
  public root = {}
  public plant = {}
  public parts = {}
  property_form:  FormGroup

  public isLeave = false
  public leaves = ["colour change", "wilting", "defoliation", "leaves die", "lessions", "rings", "spots", "spores", "apical proliferation","distortion","patches","brittle","tip burn","necrosis","dropping of flowers","silken webbing on leaves"]
  public leave_form = []
  public leave_color_change = ["Yellowing of the lower leaves", "Yellowing of the upper leaves", "Browning of leaves", "veins and petioles are reddish colour", "Leaves have a bronzed colour apperance", "Inter veinal chlorosis", "under side of the leaves have reddish colour apperance", "older leaves gradually change from green to paler green", "develop a blue gray luster", "Bleaching(whitish gray)"]
  public leave_witling = ["wilting of leaves"]
  public leave_defoliation = ["defoliation"]
  public leave_die = ["Leaves become die"]
  public leave_lessions = ["Brownish lessions on the leaves"]
  public leaves_rings = ["concentric rings in a bull's eye pattern on the leaves", "concentric rings on the leaves"]
  public leaves_spots = ["Water soaked gray green and dark spots", "Mottle spoting at leaf surface", "circular spots dark brown margin and tan to gray symptoms", "Tissues sourounding the spots may turn yellow on the leaves", "spots coalesce and leaves are blighted", "Small brown water soaked circular spots sourrounded with yellowish halo on leaves", "Dark circular spots can be seen on the upper leaves"]
  public leaves_spores = ["white spores can be seen on under side of the leaves"]
  public leaves_apical_proliferation = ["Apical proliferation"]
  public leaves_distortion = ["leaves become smaller than normal", "Curlling of the leaves", "upward rolling  leaves", "partially roling of the edge of the leaves", "petioles bend downwards", "Netting", "errect and twisted", "pitting develops in the interveinal upper surfaces of the mature leaves", "mining appearance on leaf surface", "silver streaks on leaf surface", "crinckling of the leaves", "Leaf narrowing"]
  public leaves_patches = ["white patches on lower surface of the leaves and yellowing of the uper surface", "brown clour patches on both sides of the leaves"]
  public leaves_brittle = ["older leaves become brittle"]
  public leaves_tip_burn = ["Tip burn"]
  public leaves_necrosis = ["necrosis spots", "Inter veinal necrosis", "Bud necrosis"]
  public leaves_dropping_of_flowers = ["premature dropping of flowers", "silken webbing on leaves"]
  public leaves_silken = ["silken webbing on leaves"]
  public leave_properties = [this.leave_color_change, this.leave_witling, this.leave_defoliation, this.leave_die, this.leave_lessions, this.leaves_rings, this.leaves_spots, this.leaves_spores, this.leaves_apical_proliferation, this.leaves_distortion, this.leaves_patches, this.leaves_brittle, this.leaves_tip_burn, this.leaves_necrosis, this.leaves_dropping_of_flowers, this.leaves_silken]

  public fruits = ["lessions", "rings", "spores", "drop", "distortion", "spots", "blossm end rot", "larave can be seen"]
  public fruits_form = []
  public fruits_lessions = [" lessions on the fruit"]
  public fruits_rings = ["alternate bans of red and yellow apperas on the riped fruits", "Darker and deeper ring markings", "concentric rings present on the fruit"]
  public fruits_spores = ["skin is broken and gray colour spores on the fruit surface", "white colour spores on the central region of the fruit", "black spores on the fruit surface"]
  public fruits_drop = ["Imature fruits are drop"]
  public fruits_distortion = [" light brown or tan colored central region on the fruit surface", "Sunken and rough (scabby) surface on the fruits"]
  public fruits_spots = ["Fruits have water soaked spots", "Green fruits have  water soaked spots", "whitish halo appearance on the fruit surface", "black colour spots and eruptions on the fruit surface", "whitish spots with a dark brown centre"]
  public fruits_blossm = ["blossm end rot"]
  public fruits_larave = ["larve can be seen with round hole"]
  public fruits_properties = [this.fruits_lessions, this.fruits_rings, this.fruits_spores, this.fruits_drop, this.fruits_distortion, this.fruits_spots, this.fruits_blossm, this.fruits_larave]

  public stems = ["distortion", "nodes", "cracking", "collapse", "rotting", "lessions"]
  public stem_form = []
  public stem_distortion = ["Collar of the seedlings are soft and water soaked.", "purplish stems", "Inner stem are brown, slimy, disintegrates and becomes hollow", "Girdling the plant near the soil line"]
  public stem_nodes = ["nodes and internodes are significantly reduced in size","Enlargement of nodes of the stem "]
  public stem_cracking = ["stem cracking"]
  public stem_collapse = ["Seedlings topple over collapse"]
  public stem_rotting = ["Brown soft rot of the stem"]
  public stem_lessions = ["lessions can be seen on the stem"]
  public stem_properties = [this.stem_distortion, this.stem_nodes, this.stem_cracking, this.stem_collapse, this.stem_rotting, this.stem_lessions]

  public roots = ["galls on roots"]
  public roots_form = []
  public roots_galls = ["galls on roots"]
  public roots_properties = [this.roots_galls]

  public plants = ["dying", "wilting", "stunted", "pale  colour", "distortion", "spots", "bores can be seen"]
  public plant_form = []
  public plant_dying = ["seedlings are killed just before they reach the soil surface","die back(a condition in which a tree or shrub begins to die from the tip of  its", " leaves or roots backwards, owing to disease or an unfavourable environment).", "seedlings death", "plants become die" ]
  public plant_wilting = ["sudden and permenent wilting on whole plant", "wilting of the whole plant"]
  public plant_stunted = ["stunted plants"]
  public plant_pale_colour = ["whole plant look pale colour"]
  public plant_distortion = ["cutting apperance on buds and flowers", "white colour powdary appearance on the whole plant parts", "produce more lateral branches giving a bushy appearance"]
  public plant_spots = ["sunken brown spots on leaves and fruits", "bacterial spot and speck are identical", "streaking of the leaves, stems and fruits"]
  public plant_bores = ["bores can be seen on the fruit and leaf surface"]
  public plant_properties = [this.plant_dying, this.plant_wilting, this.plant_stunted, this.plant_pale_colour, this.plant_distortion, this.plant_spots, this.plant_bores]

  public temp = {}

  public isPlant = false

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {

    this.leave = navParams.get("leave")
    this.fruit = navParams.get("fruit")
    this.stem = navParams.get("stem")
    this.root = navParams.get("root")
    this.plant = navParams.get("plant")

    this.parts = navParams.get("parts")
    this.isPlant = this.parts["Whole plant"]


    for(let i=0; i<this.leaves.length; i++){
      this.leave_form.push({
        isLeave : this.leave[this.leaves[i]],
        name : this.leaves[i],
        data : this.leave_properties[i]
      })
      for(let j=0; j<this.leave_properties[i].length; j++){
        this.temp[this.leave_properties[i][j]]=false
      }
    }
    console.log(this.temp)
    for(let i=0; i<this.fruits.length; i++){
      this.fruits_form.push({
        isFruit : this.fruit[this.fruits[i]],
        name : this.fruits[i],
        data : this.fruits_properties[i]
      })
      for(let j=0; j<this.fruits_properties[i].length; j++){
        this.temp[this.fruits_properties[i][j]]=false
      }
    }
    for(let i=0; i<this.stems.length; i++){
      this.stem_form.push({
        isStem : this.stem[this.stems[i]],
        name : this.stems[i],
        data : this.stem_properties[i]
      })
      for(let j=0; j<this.stem_properties[i].length; j++){
        this.temp[this.stem_properties[i][j]]=false
      }
    }

    for(let i=0; i<this.roots.length; i++){
      this.roots_form.push({
        isRoot : this.root[this.roots[i]],
        name : this.roots[i],
        data : this.roots_properties[i]
      })
      for(let j=0; j<this.roots_properties[i].length; j++){
        this.temp[this.roots_properties[i][j]]=false
      }
    }

    for(let i=0; i<this.plants.length; i++){
      console.log(this.plant[this.plants[i]])
      this.plant_form.push({
        isPlant : this.plant[this.plants[i]],
        name : this.plants[i],
        data : this.plant_properties[i]
      })
      for(let j=0; j<this.plant_properties[i].length; j++){
        this.temp[this.plant_properties[i][j]]=false
      }
    }

    this.property_form = this.fb.group(this.temp)

    this.property_form.valueChanges.subscribe(console.log)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageThreePage');
  }

  itemTapped() {
    this.navCtrl.push(PageFourPage, {
      data:this.property_form.value
    });
  }

}
