import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proyectos=[
      {
        src:"",
        nombre:"Portafolio",
        info:"Proyecto mi portafolio"
      },
      {
        src:"",
        nombre:"Ecommerce",
        info:"Proyecto Ecommerce de Codo a Codo"
      },
      {
        src:"",
        nombre:"ViverosTP",
        info:"Trabajo practico de la materia Ingenieria de Software"
      },
      {
        src:"",
        nombre:"Python",
        info:"Practica ejercicios Python"
      }
  ]


}
