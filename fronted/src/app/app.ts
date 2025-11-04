import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Restapi } from './restapi/restapi';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Restapi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'fronted';
}
