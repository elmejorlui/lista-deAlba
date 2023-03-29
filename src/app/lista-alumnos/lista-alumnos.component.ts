import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: string[] = [
    'Maria',
    'Jose',
    'Pedro',
    'Naruto',
    'Sasuke',
    'Hinata',
    'Pain',
    'Kakashi',
  ]
}
