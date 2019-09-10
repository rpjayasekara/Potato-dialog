import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms'
import {PageTwoPage} from "../page-two/page-two";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  partsForm: FormGroup

  public parts = ["Leaves", "Fruits", "Stem", "Roots", "Whole plant"]

  public data = {}

  constructor(public navCtrl: NavController, public fb: FormBuilder) {
    for (let i = 0; i < this.parts.length; i++) {
      // console.log(this.parts[i])
      this.data[this.parts[i]] = false
    }
    console.log(this.data)
    this.partsForm = this.fb.group(this.data)

    //debuging form
    this.partsForm.valueChanges.subscribe(console.log)

  }

  itemTapped() {
    this.navCtrl.push(PageTwoPage, {
      user_data:this.partsForm.value
    });
  }

}
