import { Component , ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

   public editText:any;
  public nombre:string;
  public materno:string;
  public paterno:string;
  public fecha:string;

  public mensaje:string;
  public foco:any;

  
  @ViewChild('name') campoNombre;
  @ViewChild('password') campoPassword;
  @ViewChild('matern') campoMaterno;
  @ViewChild('patern') campoPaterno;
  @ViewChild('date') campoFecha;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public formi:FormBuilder) {

    this.editText=this.formi.group({
        "nombre":["",Validators.required],
        "materno":["",Validators.required],
        "paterno":["",Validators.required],
        "fecha":["",Validators.compose([Validators.required,Validators.pattern(/^([0-9]+)\/([0-9]+)\/([0-9]{2,8})$/)])]                                   
      });
  }
  
  public validar(){

    if(this.editText.get('nombre')._value == undefined || this.editText.get('nombre')._value == ""){
      this.mensaje = this.mensaje+" El Nombre no puede estar vacio <br>";
      this.foco = this.campoNombre;        
    }
    if(this.editText.get('materno')._value == undefined || this.editText.get('materno')._value == ""){
      this.mensaje = this.mensaje+" No puede estar vacio <br>";
      this.foco = this.campoNombre;        
    }
  if(this.editText.get('paterno')._value == undefined || this.editText.get('paterno')._value == ""){
      this.mensaje = this.mensaje+"No puede estar vacio <br>";
      this.foco = this.campoNombre;        
    }
    let x = new RegExp(/^([0-9]+)\/([0-9]+)\/([0-9]{2,8})$/);
    if(!x.test(this.editText.get('fecha')._value)){
      this.mensaje = this.mensaje+" Debe tener formato válido <br>";
      this.foco = this.campoPassword;
    }





    if(this.editText.get('email')._value == undefined || this.editText.get('email')._value == ""){
      this.mensaje = this.mensaje+" No puede estar vacio <br>";
      this.foco = this.campoPassword;
    }else{

    this.navCtrl.push(AboutPage);
  }
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: 'Corregir lo siguiente para poder continuar',
    message: this.mensaje,
    buttons: [{
        text: 'Aceptar',
        role: 'cancel',
        handler: () => {

        }
      }]
  });
  alert.present();
  this.mensaje = "";
}


}
