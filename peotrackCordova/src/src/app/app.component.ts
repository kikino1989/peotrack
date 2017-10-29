import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import Order from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'PeoTrack, the personal order tracking app that is a joy to use.';

  constructor(private storage: StorageService){

    storage.openDB("peotrack");
  }
}

