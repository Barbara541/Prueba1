export type tiposeccion='MATEMATICA' | 'LENGUAJE' | 'PROGRAMACION' | 'BASEDEDATOS'
export interface Alumno {

  rut? : number;
  nombre: string;
  apellido: string;
  edad : number;
  seccion: tiposeccion;
}

