import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard,IonCardContent, IonProgressBar,
  IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonIcon
}from '@ionic/angular/standalone';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard,IonProgressBar,
    IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonCardContent,IonIcon]
})
export class GoalsPage implements OnInit {
  selectedGoal: string | null = null;

  constructor(private router: Router) {}

  selectGoal(goal: string) {
    this.selectedGoal = goal;
  }

  nextPage() {
    if (this.selectedGoal) {
      console.log('Objetivo seleccionado:', this.selectedGoal);
      this.router.navigate([]); 
    }
  }

  ngOnInit() {
  }


}
