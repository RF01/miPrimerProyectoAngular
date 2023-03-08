import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../modelos/Zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})

export class ZapatillasComponent implements OnInit {
  public zapatillas : Array<Zapatilla>;

  public color : string = "red";

  public miMarca : string= "";

    constructor(){
      console.log("Componente Generado");
      this.zapatillas=[
        new Zapatilla('a','R','rojo',80,true),
        new Zapatilla('b','R','azul',90,true),
        new Zapatilla('c','N','gris',50,false)
      ];
    }
    ngOnInit(): void{
      console.log(this.zapatillas);
    }
    borrarMarca(indice : number){
      this.zapatillas.splice(indice,1);
    }

    onBlur(): void{
      console.log("has salido");
    }

    keyUp(): void{
      console.log("has pulsado una tecla");
    }

    keyUpEnter(): void{
      console.log("has pulsado una enter");
    }

    getMarca(): void{
      console.log("get marca");
      this.zapatillas.push(new Zapatilla('a',this.miMarca,'gris',150,false));
    }
  
}
