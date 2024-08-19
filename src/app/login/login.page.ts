import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';  
import { TabsPage } from '../tabs/tabs.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton]
})
export class LoginPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private navCtrl: NavController  // Inyecta NavController

  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async goToTabs() {
    // Cierra el modal si existe
    if (this.modalCtrl) {
      await this.modalCtrl.dismiss();
    }
    
    // Navega a la página de tabs
    this.navCtrl.navigateRoot('/tabs', { animated: true, animationDirection: 'forward' });
  }
  

}
