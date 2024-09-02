import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonLabel, IonButton, IonItem, IonIcon, IonRadio,
  IonProgressBar, IonSelectOption
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonLabel, IonButton,
    IonItem, IonIcon, IonRadio, IonProgressBar, IonSelectOption
  ]
})
export class GenderPage implements OnInit {
  selectedGender: string = '';
  edad: number = 0.0;
  altura: number = 0.0;
  peso: number = 0.0;
  unidadAltura: string = 'm';
  unidadPeso: string = 'kg';
  pesoMeta: number = 0;
  objetivoSemanal: string = '';
  unidadPesoMeta: string = 'kg'; // Valor por defecto

  constructor(private navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() { }

  setUserData() {
    this.dataService.setGender(this.selectedGender);
    this.dataService.setAge(this.edad);
    this.dataService.setHeight(this.altura);
    this.dataService.setWeight(this.peso);
    
  }

  convertirAltura() {
    if (this.unidadAltura === 'cm') {
      this.altura = this.altura / 100; // Convertir cm a metros
    }
  }

  convertirPesoMeta() {
    if (this.unidadPesoMeta === 'lbs') {
      this.pesoMeta = this.pesoMeta * 0.453592; // Convertir libras a kilogramos
    }
  }

  convertirPeso() {
    if (this.unidadPeso === 'lbs') {
      this.peso = this.peso * 0.453592; // Convertir libras a kilogramos
    }
  }

  onSubmit() {
    // Convertir los datos antes de guardarlos
    this.convertirAltura();
    this.convertirPeso();
    this.convertirPesoMeta();

    // Guardar los datos en el servicio
    this.setUserData();

    // Log para depuración
    console.log(`Edad: ${this.edad}`);
    console.log(`Altura: ${this.altura} m`);
    console.log(`Peso: ${this.peso} kg`);
    console.log(`Género: ${this.selectedGender}`);
    console.log(`Peso Meta: ${this.pesoMeta}`);
    console.log(`Objetivo Semanal: ${this.objetivoSemanal}`);

    // Navegar a la página de actividad
    this.navCtrl.navigateForward('/activity', { animated: true, animationDirection: 'forward' });
  }
}
