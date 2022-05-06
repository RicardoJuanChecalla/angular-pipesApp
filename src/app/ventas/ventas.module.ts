import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipes';
import { FlyingPipe } from './pipes/flying.pipes';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    //components
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    //pipes
    MayusculasPipe,
    FlyingPipe,
    OrdenarPipe
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
