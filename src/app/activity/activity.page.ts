import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent,IonFooter, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader,IonCardTitle, IonCardSubtitle, IonList, IonItem,
  IonLabel, IonRadio, IonButton, IonButtons, IonBackButton}from '@ionic/angular/standalone';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader,IonCardTitle, 
    IonCardSubtitle,IonFooter, IonList, IonItem, IonLabel, IonRadio, IonButton, IonButtons, IonBackButton]
})


export class ActivityPage implements OnInit {
  selectedActivity: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectActivity(activity: string) {
    this.selectedActivity = activity;
  }
  

  goToNextPage() {
    if (this.selectedActivity) {
      // Navegar a la siguiente página o realizar alguna acción
      console.log('Goal seleccionado:', this.selectedActivity);
      this.router.navigate(['']); 
    } else {
      alert('Please select a goal.');
    }
  }

}



