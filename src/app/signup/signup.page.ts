import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/angular/standalone';
import { ModalController, NavController } from '@ionic/angular'; 
import { DataService } from '../services/data.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton, IonInput]
})
export class SignupPage implements OnInit {

  username: string = '';
  name: string = '';
  password: string = '';

  constructor(
    public modalCtrl: ModalController,
    private navCtrl: NavController, // Añade NavController en el constructor
    private dataService: DataService, // Inyectar el servicio aquí
    private router: Router // Añadir Router para navegación


  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
  goToGoals() {
    this.router.navigate(['/goals'], { state: { user: { username: this.username, name: this.name, password: this.password } } });
  }


}
