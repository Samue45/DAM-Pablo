import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../components/producto-component/producto-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Project1');
}
