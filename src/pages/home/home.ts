import { Component , ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  public editText:any;
  public nombre:string;
  public email:string;

  public mensaje:string;
  public foco:any;

  
  @ViewChild('name') campoNombre;
  @ViewChild('password') campoPassword;



  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public formi:FormBuilder,) {

    this.editText=this.formi.group({
        "nombre":["",Validators.required],
        "email":["",Validators.compose([Validators.required,Validators.pattern(/^([a-z]{2,8})$/)])],                    
      });
  }
  
  public validar(){

    if(this.editText.get('nombre')._value == undefined || this.editText.get('nombre')._value == ""){
      this.mensaje = this.mensaje+" El Nombre no puede estar vacio <br>";
      this.foco = this.campoNombre;        
    }
    let x = new RegExp(/^([a-z]{2,6})$/);
    if(!x.test(this.editText.get('email')._value)){
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



}