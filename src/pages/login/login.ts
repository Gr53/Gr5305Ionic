import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  respouceData: any;
  userData={
   auth:{ email:"",password:""
    }
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, 
    public authServiceProvider: AuthServiceProvider,
    public alertCtl: AlertController,
    public storage: Storage ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter () { 
    this.menu.enable (false); 
} 



login(){
  /*this.authServiceProvider.postData(this.userData, "user_token").subscribe(
    (data)=>{
      console.log(data);
      //this.storage.set('jwt', data["jwt"]);
        
        
        
        //this.storage.get('jwt').then((val) => {
         // console.log('the jwt is', val);
          
       // });

       
      }
      
      
  );*/
  this.authServiceProvider.postData(this.userData, "user_token").then((result) => {
    this.respouceData = result;
    console.log(this.respouceData);
    localStorage.setItem('jwt', this.respouceData["jwt"]);
    console.log("el token es:"+localStorage.getItem("jwt"));
    //localStorage.setItem('user', JSON.stringify(this.respouceData));
    //(this.navCtrl.push(HomePage); 
  }, (err) => {
    console.log("error ___________________")
    let alert = this.alertCtl.create({
      title: 'Iniciar Sesión',
      subTitle: 'No se pudo iniciar sesión, por favor intente mas tarde.',
      buttons: ['Dismiss']
    });
    alert.present();
  });
}

}
