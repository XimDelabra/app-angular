import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../components/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, Navbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
