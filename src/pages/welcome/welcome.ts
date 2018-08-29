import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { LoginPage } from '../login/login'
import { SignUpPage } from '../sign-up/sign-up'

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.enable (false);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  goLogin(){
    this.navCtrl.push(LoginPage);

  }

  goSignUp(){
    this.navCtrl.push(SignUpPage);
  }


}
