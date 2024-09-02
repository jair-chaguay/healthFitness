// src/app/services/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Variables para compartir entre páginas
  private gender: string;
  private age: number;
  private weight: number;
  private height: number;
  private activityLevel: string;

  constructor() { }

  // Métodos para establecer y obtener datos
  setGender(gender: string) {
    this.gender = gender;
  }

  getGender(): string {
    return this.gender;
  }

  setAge(age: number) {
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  // Agregar métodos similares para otras variables
  setWeight(weight: number) {
    this.weight = weight;
  }

  getWeight(): number {
    return this.weight;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getHeight(): number {
    return this.height;
  }

  setActivityLevel(activityLevel: string) {
    this.activityLevel = activityLevel;
  }

  getActivityLevel(): string {
    return this.activityLevel;
  }
}
