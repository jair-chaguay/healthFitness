  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonLabel, IonButton} from '@ionic/angular/standalone';
  import {ModalController, NavController} from '@ionic/angular'


  @Component({
    selector: 'app-gender',
    templateUrl: './gender.page.html',
    styleUrls: ['./gender.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonLabel, IonButton]
  })
  export class GenderPage implements OnInit {
    selectedGender: string | null = null;

  constructor(
    public modalCtrl: ModalController,
    private navCtrl: NavController  // Inyecta NavController

  ) { }

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  toggleGender(gender: string) {
    if (this.selectedGender === gender) {
      // Si el género ya está seleccionado, lo deseleccionamos
      this.selectedGender = null;
    } else {
      // Si no, seleccionamos el género
      this.selectedGender = gender;
    }
  }

  async nextPage() {
    
    this.navCtrl.navigateRoot('/old-wei-alt', { animated: true, animationDirection: 'forward' });

  }
}