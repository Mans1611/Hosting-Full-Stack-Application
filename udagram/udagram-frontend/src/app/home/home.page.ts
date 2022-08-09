import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  appName = environment.appName;
  apiURL = environment.apiHost;

}

console.log(environment.apiHost);
