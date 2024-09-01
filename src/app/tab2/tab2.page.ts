import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCardContent,IonCardTitle,IonCardHeader,IonCard} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [CommonModule,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCardContent,IonCardTitle,IonCardHeader,IonCard]
})
export class Tab2Page implements OnInit{
  activityLevel: string = 'moderado'; // Cambia esto según el nivel de actividad del usuario
  caloriesNeeded: number = 2000; // Puedes ajustar esto en función del usuario
  daysOfWeek: { name: string, exercises: { name: string, description: string }[] }[] = [];

  ngOnInit() {
    this.updateDaysOfWeek();
  }

  updateDaysOfWeek() {
    const allExercises = [
      { name: 'Ejercicio A', description: 'Descripción A' },
      { name: 'Ejercicio B', description: 'Descripción B' },
      { name: 'Ejercicio C', description: 'Descripción C' },
      // Añade más ejercicios según sea necesario
    ];

    switch (this.activityLevel) {
      case 'sedentario':
        this.daysOfWeek = [
          { name: 'Lunes', exercises: allExercises.slice(0, 1) },
          { name: 'Miércoles', exercises: allExercises.slice(1, 2) },
          { name: 'Viernes', exercises: allExercises.slice(2, 3) },
        ];
        break;
      case 'moderado':
        this.daysOfWeek = [
          { name: 'Lunes', exercises: allExercises.slice(0, 2) },
          { name: 'Martes', exercises: allExercises.slice(1, 3) },
          { name: 'Miércoles', exercises: allExercises.slice(0, 2) },
          { name: 'Jueves', exercises: allExercises.slice(1, 3) },
          { name: 'Viernes', exercises: allExercises.slice(0, 2) },
        ];
        break;
      case 'activo':
        this.daysOfWeek = [
          { name: 'Lunes', exercises: allExercises },
          { name: 'Martes', exercises: allExercises },
          { name: 'Miércoles', exercises: allExercises },
          { name: 'Jueves', exercises: allExercises },
          { name: 'Viernes', exercises: allExercises },
          { name: 'Sábado', exercises: allExercises },
          { name: 'Domingo', exercises: allExercises },
        ];
        break;
    }
  }
}
