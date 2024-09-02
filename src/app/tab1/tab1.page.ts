import { Component,OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonInput, IonButton,
  IonLabel, IonList, IonItem, IonBadge,IonCol,IonRow,IonGrid} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonInput, IonButton,
    IonLabel, IonList, IonItem,IonBadge,IonCol,IonRow,IonGrid],
})
export class Tab1Page implements OnInit {
  gender: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  dailyCalories: number;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    // Obtener datos del servicio
    this.gender = this.dataService.getGender();
    this.age = this.dataService.getAge();
    this.weight = this.dataService.getWeight();
    this.height = this.dataService.getHeight();
    this.activityLevel = this.dataService.getActivityLevel();

    // Realizar el cálculo de calorías
    this.calculateCalories();
    
  }
  calculateCalories() {
    let tmb: number;

    // Cálculo de TMB basado en el género
    if (this.gender === 'Masculino') {
      tmb = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age);
    } else {
      tmb = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);
    }

    // Cálculo del Total Diario de Calorías (TDC) basado en el nivel de actividad
    switch (this.activityLevel) {
      case 'sedentario':
        this.dailyCalories = tmb * 1.2;
        break;
      case 'actividad-ligera':
        this.dailyCalories = tmb * 1.375;
        break;
      case 'moderadamente-activa':
        this.dailyCalories = tmb * 1.55;
        break;
      case 'muy-activa':
        this.dailyCalories = tmb * 1.725;
        break;
      default:
        this.dailyCalories = tmb * 1.2; // Asumiendo 'No muy activo' como predeterminado
        break;
    }
  }
}
