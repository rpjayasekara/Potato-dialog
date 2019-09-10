import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PageThreePage} from "../page-three/page-three"

/**
 * Generated class for the PageTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page-two',
  templateUrl: 'page-two.html',
})
export class PageTwoPage {


  leaveForm: FormGroup
  fruitForm: FormGroup
  stemForm: FormGroup
  rootForm: FormGroup
  plantForm: FormGroup

  public data = {
    Leaves : ["colour change", "wilting", "defoliation", "leaves die", "lessions", "rings", "spots", "spores", "apical proliferation","distortion","patches","brittle","tip burn","necrosis","dropping of flowers","silken webbing on leaves"],
    Fruits : ["lessions", "rings", "spores", "drop", "distortion", "spots", "blossm end rot", "larave can be seen"],
    Stem : ["distortion", "nodes", "cracking", "collapse", "rotting", "lessions"],
    Roots : ["galls on roots"],
    Plant : ["dying", "wilting", "stunted", "pale  colour", "distortion", "spots", "bores can be seen"]
  }
  public leaves = ["colour change", "wilting", "defoliation", "leaves die", "lessions", "rings", "spots", "spores", "apical proliferation","distortion","patches","brittle","tip burn","necrosis","dropping of flowers","silken webbing on leaves"]
  public fruits = ["lessions", "rings", "spores", "drop", "distortion", "spots", "blossm end rot", "larave can be seen"]
  public plant = ["dying", "wilting", "stunted", "pale  colour", "distortion", "spots", "bores can be seen"]
  public stem = ["distortion", "nodes", "cracking", "collapse", "rotting", "lessions"]
  public root = ["galls on roots"]

  public forms = [this.leaveForm, this.fruitForm, this.stemForm, this.rootForm, this.plantForm]
  public parts = ["Leaves", "Fruits", "Stem", "Roots", "Plant"]
  public temp = {}

  public isLoad = false

  public user_data = {}

  public isLeaves = false
  public isFruits = false
  public isStem = false
  public isRoot = false
  public isPlant = false



  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {


    this.user_data = navParams.get("user_data")

    console.log(this.user_data)

    for(let i=0; i<this.leaves.length; i++){
      this.temp[this.leaves[i]]=false
    }
    this.leaveForm = this.fb.group(this.temp)

    if(this.user_data["Leaves"]){

      this.isLeaves = true
    }

    this.temp = {}
    for(let i=0; i<this.fruits.length; i++){
      this.temp[this.fruits[i]]=false
    }
    this.fruitForm = this.fb.group(this.temp)

    if(this.user_data["Fruits"]){

      this.isFruits = true
    }

    this.temp = {}
    for(let i=0; i<this.stem.length; i++){
      this.temp[this.stem[i]]=false
    }
    this.stemForm = this.fb.group(this.temp)

    if(this.user_data["Stem"]){

      this.isStem = true
    }

    this.temp = {}
    for(let i=0; i<this.root.length; i++){
      this.temp[this.root[i]]=false
    }
    this.rootForm = this.fb.group(this.temp)

    if(this.user_data["Roots"]){

      this.isRoot = true
    }

    this.temp = {}
    for(let i=0; i<this.plant.length; i++){
      this.temp[this.plant[i]]=false
    }
    this.plantForm = this.fb.group(this.temp)

    if(this.user_data["Whole plant"]){

      this.isPlant = true
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageTwoPage');
  }

  itemTapped() {
    this.navCtrl.push(PageThreePage, {
      leave:this.leaveForm.value,
      fruit:this.fruitForm.value,
      stem:this.stemForm.value,
      root:this.rootForm.value,
      plant:this.plantForm.value,
      parts:this.user_data
    });
  }

}
