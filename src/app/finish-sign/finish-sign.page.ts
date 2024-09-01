import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle,IonCardContent,IonButton } 
from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-finish-sign',
  templateUrl: './finish-sign.page.html',
  styleUrls: ['./finish-sign.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, 
    IonCardTitle,IonCardContent,IonButton]
})
export class FinishSignPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  goToLogin(){
    this.nav.navigateForward('/login');
  }
}
