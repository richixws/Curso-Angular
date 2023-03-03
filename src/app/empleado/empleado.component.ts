import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

 nombre="richard";
 apellido="wong";
 edad=28;
 empresa="developer";

 /*getEdad(){
  return this.edad;
 }*/
   habilitarCuadro=true;

   usuRegistrado=false;
  

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEmpresa(value:string){
     
  }

 getRegistroUsuario(){
  this.usuRegistrado=true;
 }

}
