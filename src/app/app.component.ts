import { Component } from '@angular/core';
import { Miguel } from './miguel/miguel'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Miguel],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
