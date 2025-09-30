import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Question } from '../components/question/question';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Question],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Project1');
}
