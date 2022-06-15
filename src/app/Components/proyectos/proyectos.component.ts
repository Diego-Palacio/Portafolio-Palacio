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
        info:""
      },
      {
        src:"",
        nombre:"Ecommerce",
        info:""
      },
      {
        src:"",
        nombre:"ViverosTP",
        info:""
      },
      {
        src:"",
        nombre:"Python",
        info:""
      }
  ]


}
