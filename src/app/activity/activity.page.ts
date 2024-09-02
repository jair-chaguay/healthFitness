import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonProgressBar,
  IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonIcon
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service'; // Importación del servicio de datos

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonProgressBar,
    IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonCardContent, IonIcon]
})
export class ActivityPage implements OnInit {
  selectedActivity: string = '';

  // Inyectar tanto NavController como DataService
  constructor(private navCtrl: NavController, private dataService: DataService) {}

  // Método para establecer el nivel de actividad del usuario en el servicio de datos
  setUserData() {
    console.log('Estableciendo nivel de actividad:', this.selectedActivity); // Depuración
    this.dataService.setActivityLevel(this.selectedActivity);
  }

  // Método de navegación al siguiente componente
  onNext() {
    this.setUserData(); // Asegúrate de establecer el nivel de actividad antes de navegar
    this.navCtrl.navigateForward('/obj-weekend', { animated: true, animationDirection: 'forward' });
  }

  ngOnInit() {}
}
