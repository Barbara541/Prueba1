import { Component, EventEmitter, Output} from '@angular/core';
import {Alumno, tiposeccion} from '../../modelo/alumno'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output ( )public alumno = new EventEmitter <Alumno> ();

  public nuevoAlumno:Alumno ={
    rut:0,
    nombre:'',
    apellido:'',
    edad:0,
    seccion:'BASEDEDATOS'
  }
  public cambiarNombre (evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.rut=Number.parseInt(elemento.value)||1;
  }

  public cambiarApellido (evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.apellido=elemento.value as tiposeccion;
  }

  public cambiarEdad (evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.edad=Number.parseInt (elemento.value);

  }

  public cambiarSeccion (evento:Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.seccion=elemento.value as tiposeccion;
  }

  public guardarElemento():void{
    const copia:Alumno={
      ...this.nuevoAlumno
    };
    this.alumno.emit(copia);
    this.nuevoAlumno.rut=203458979;
    this.nuevoAlumno.nombre='JUAN';
    this.nuevoAlumno.apellido='PEREZ';
    this.nuevoAlumno.edad=20;
    this.nuevoAlumno.seccion= 'BASEDEDATOS';
  }


}
