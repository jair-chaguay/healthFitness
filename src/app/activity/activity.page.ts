import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard,IonCardContent, IonProgressBar,
  IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonIcon
}from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard,IonProgressBar,
    IonList, IonRadioGroup, IonItem, IonLabel, IonRadio, IonButton, IonCardContent,IonIcon]
})


export class ActivityPage implements OnInit {

  selectedActivity: string= '';

  constructor(private router: Router) {}

  onNext() {

  }

  ngOnInit() {
  }

 

}



