import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  //i18nSelectPipe
  // nombre: string = 'Maria';
  // genero: string = 'femenino';
  nombre: string = 'Ricardo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  cambiarPersona(){
    if(this.genero === 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Maria'
    }
    else{
      this.genero = 'masculino'
      this.nombre = 'Ricardo'
    }
  }

  //i18nPluralPipe
  clientes: string[] = ['Maria','Ricardo','Nayeli','Gina'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  borrarCliente(){
    if(this.clientes.length >0 )
    {
      this.clientes.pop();
    }
  }
  //KeyValuePipe
  persona = {
    nombre: 'Ricardo',
    edad: 39,
    direccion: 'Tacna-Perú'
  }
  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];
  //AsyncPipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
