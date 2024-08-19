import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { SignupPage } from '../signup/signup.page';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class InicioPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async login(){
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated:true,
      mode:'ios',
      backdropDismiss:false,
      cssClass: 'login-modal'
    })

    return await modal.present();

  }

  async signup(){
    const modal= await this.modalCtrl.create({
      component: SignupPage,
      animated: true,
      mode: 'ios',
      backdropDismiss:false,
      cssClass: 'signup-modal',
    })

    return await modal.present();
  }
}
