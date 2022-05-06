import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})

export class OrdenarComponent {

  enMayuscula: boolean = true;
  ordenarPor: string = 'sin valor';

  heroes: Heroe[] =[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },    
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },    
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },    
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  cambiar(){
    this.enMayuscula = !this.enMayuscula
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

}
