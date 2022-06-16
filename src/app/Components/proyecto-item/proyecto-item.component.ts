import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {

@Input() nombreProyecto!:string;
@Input() infoProyecto!:string;

  constructor() { 
    
  }

  ngOnInit(): void {
    console.warn(this.nombreProyecto)
  }

}
