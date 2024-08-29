import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButton, IonTitle, IonToolbar,IonItem, IonRange, IonButtons, IonProgressBar,IonLabel, IonSegment,
  IonSegmentButton,IonBackButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-old-wei-alt',
  templateUrl: './old-wei-alt.page.html',
  styleUrls: ['./old-wei-alt.page.scss'],
  standalone: true,
  imports: [IonContent, IonProgressBar, IonHeader, IonButton,IonItem, IonTitle, IonToolbar, CommonModule, FormsModule, IonRange, 
    IonButtons,IonBackButton, IonSegmentButton,IonLabel, IonSegment,]
})
export class OldWeiAltPage implements OnInit {

  peso: number= 82;
  altura: number= 185;
edad: number = 40;
  constructor() { }

  ngOnInit() {
  }

}
