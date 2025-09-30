import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.scss'
})
export class Question {

  //This must be in a service
  arrayQuestions = [
    { question: '¿Qué es Angular?', answer: 'Angular es un framework de desarrollo para crear aplicaciones web dinámicas y de una sola página (SPA) utilizando TypeScript y HTML.', visible: false },
    { question: '¿Qué es TypeScript?', answer: 'TypeScript es un superconjunto de JavaScript que añade tipado estático y otras características avanzadas al lenguaje, facilitando el desarrollo de aplicaciones grandes y complejas.', visible: false },
    { question: '¿Qué es un componente en Angular?', answer: 'Un componente en Angular es una unidad básica de la interfaz de usuario que combina una plantilla HTML, una clase TypeScript y estilos CSS para definir la apariencia y el comportamiento de una parte específica de la aplicación.', visible: false },
    { question: '¿Qué es un servicio en Angular?', answer: 'Un servicio en Angular es una clase que proporciona funcionalidades específicas y se utiliza para compartir datos y lógica entre diferentes componentes de la aplicación, promoviendo la reutilización y la separación de responsabilidades.', visible: false },
    { question: '¿Qué es el data binding en Angular?', answer: 'El data binding en Angular es un mecanismo que permite la sincronización automática de datos entre la plantilla HTML y la clase TypeScript del componente, facilitando la interacción y actualización de la interfaz de usuario.', visible: false }
  ];

  constructor() { }

}
