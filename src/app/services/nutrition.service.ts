import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiKey = '92dd735427c6494e9d21fd23db0ce16d'; 

  constructor(private http: HttpClient) {}

  getRecipesByNutrients(minCalories: number, maxCalories: number, number: number): Observable<Recipe[]> {
    const url = `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minCalories}&maxCalories=${maxCalories}&number=${number}&apiKey=${this.apiKey}`;
    return this.http.get<Recipe[]>(url);
  }
}

