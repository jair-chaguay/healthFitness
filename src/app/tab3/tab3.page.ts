import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonList, IonNote } from '@ionic/angular'; // Importa todos los componentes necesarios
import { NutritionService } from '../services/nutrition.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule 
  ]
})
export class Tab3Page {
  mealPlan: Recipe[] = [];
  targetCalories: number = 2000; 
  selectedMeals: { breakfast: number; lunch: number; snack: number } = { breakfast: 0, lunch: 0, snack: 0 };
  breakfastInput: number = 0;
  lunchInput: number = 0;
  snackInput: number = 0;
  currentMeal: Recipe | null = null;

  constructor(private http: HttpClient, private nutritionService: NutritionService) {}

  searchMeal(mealType: keyof typeof this.selectedMeals) {
    const calories = this.selectedMeals[mealType];
    this.nutritionService.getRecipesByNutrients(calories - 100, calories + 100, 1).subscribe(
      data => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          this.currentMeal = {
            title: data[randomIndex].title,
            calories: data[randomIndex].calories,
            image: data[randomIndex].image
          };
        }
      },
      error => {
        console.error('Error al obtener recetas', error);
      }
    );
  }

  searchBreakfast() {
    this.searchMeal('breakfast');
  }

  searchLunch() {
    this.searchMeal('lunch');
  }

  searchSnack() {
    this.searchMeal('snack');
  }

  get totalCalories() {
    return this.selectedMeals.breakfast + this.selectedMeals.lunch + this.selectedMeals.snack;
  }

  get remainingCalories() {
    return this.targetCalories - this.totalCalories;
  }
}
