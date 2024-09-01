import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/angular/standalone';
import { ModalController, NavController } from '@ionic/angular';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton, IonInput]
})
export class SignupPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private navCtrl: NavController // Añade NavController en el constructor
  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
  goToGoals() {
    this.navCtrl.navigateForward('/goals', { animated: true, animationDirection: 'forward' }); // Cambia '/goals' por la ruta correcta de tu página Goals
  }


}
