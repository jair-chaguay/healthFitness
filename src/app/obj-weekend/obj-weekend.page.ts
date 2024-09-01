import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton

 } from '@ionic/angular/standalone';
 import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-obj-weekend',
  templateUrl: './obj-weekend.page.html',
  styleUrls: ['./obj-weekend.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, 
    IonLabel, IonInput, IonSelect, IonSelectOption, IonButton]
})
export class ObjWeekendPage implements OnInit {
  pesoMeta: number = 0;
objetivoSemanal: string = '';
  unidadPesoMeta: string = 'kg'; // Valor por defecto
  
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  convertirPesoMeta() {
    if (this.unidadPesoMeta === 'lbs') {
      this.pesoMeta = this.pesoMeta * 0.453592; // Convertir libras a kilogramos
    }
  }

  onSubmit() {
    // Asegurarse de que el pesoMeta esté en kg antes de enviar
    if (this.unidadPesoMeta === 'lbs') {
      this.pesoMeta = this.pesoMeta * 0.453592; // Convertir libras a kilogramos
    }
    
    console.log(`Peso Meta: ${this.pesoMeta} kg`);
    console.log(`Objetivo Semanal: ${this.objetivoSemanal} kg por semana`);
    // Aquí podrías guardar estos datos o usarlos según sea necesario

    this.navController.navigateForward('/finish-sign')
  }
} 