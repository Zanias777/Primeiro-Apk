import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardContent],
})
export class HomePage {
  constructor() {}
}
