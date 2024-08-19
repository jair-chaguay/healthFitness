import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRange} from '@ionic/angular/standalone';

@Component({
  selector: 'app-old-wei-alt',
  templateUrl: './old-wei-alt.page.html',
  styleUrls: ['./old-wei-alt.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRange]
})
export class OldWeiAltPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
