// src/app/services/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Variables para compartir entre páginas
  private gender: string = '';
  private age: number = 0;
  private height: number = 0;
  private weight: number = 0;
  private activityLevel: string= '';
  private heightUnit: string = 'm';
  private weightUnit: string = 'kg';
  private targetWeight: number = 0;
  private targetWeightUnit: string = 'kg';
  private weeklyGoal: string = '';

  constructor() { }

  // Métodos para establecer y obtener datos
  setGender(gender: string) {
    this.gender = gender;
  }

  setAge(age: number) {
    this.age = age;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  setHeightUnit(unit: string) {
    this.heightUnit = unit;
  }

  setWeightUnit(unit: string) {
    this.weightUnit = unit;
  }

  setTargetWeight(targetWeight: number) {
    this.targetWeight = targetWeight;
  }

  setTargetWeightUnit(unit: string) {
    this.targetWeightUnit = unit;
  }

  setWeeklyGoal(goal: string) {
    this.weeklyGoal = goal;
  }

  setActivityLevel(activityLevel: string) {
    this.activityLevel = activityLevel;
  }

  getAge(): number {
    return this.age;
  }

  getGender(): string {
    return this.gender;
  }

  getWeight(): number {
    return this.weight;
  }

  getHeight(): number {
    return this.height;
  }

  getActivityLevel(): string {
    return this.activityLevel;
  }

  getUserData() {
    return {
      gender: this.gender,
      age: this.age,
      height: this.height,
      weight: this.weight,
      heightUnit: this.heightUnit,
      weightUnit: this.weightUnit,
      targetWeight: this.targetWeight,
      targetWeightUnit: this.targetWeightUnit,
      weeklyGoal: this.weeklyGoal
    };
  }
}