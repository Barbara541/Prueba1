import { Component, EventEmitter, Output} from '@angular/core';
import {Alumno, tiposeccion} from '../../modelo/alumno'
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
  @Output ( )public seccion = new EventEmitter <Alumno> ();
  public :Alumno ={
    id:0,
    seccion:'BASEDEDATOS'
  }

  public cambiarId (evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoSeccion.id=Number.parseInt (elemento.value);

  }

  public cambiarSeccion (evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoSeccion.seccion=elemento.value as tiposeccion;
  }
}
