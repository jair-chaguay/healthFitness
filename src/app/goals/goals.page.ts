import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent,IonFooter, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader,IonCardTitle, IonCardSubtitle, IonList, IonItem,
 IonLabel, IonRadio, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader,IonCardTitle, 
    IonCardSubtitle,IonFooter, IonList, IonItem, IonLabel, IonRadio, IonButton]
})
export class GoalsPage implements OnInit {
  selectedGoal: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectGoal(goal: string) {
    this.selectedGoal = goal;
  }
  

  goToNextPage() {
    if (this.selectedGoal) {
      // Navegar a la siguiente página o realizar alguna acción
      console.log('Goal seleccionado:', this.selectedGoal);
      this.router.navigate(['']); 
    } else {
      alert('Please select a goal.');
    }
  }

}
