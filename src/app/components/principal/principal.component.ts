import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Grupo } from 'src/app/models/grupo/grupo.module';

import { ServiciosRocksService } from 'src/app/services/servicios-rocks.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  grupos:Grupo[]=[]; //Contiene la lista de los grupos

  //Buscar grupo
  termino='';
  grupoEncontrado:any=[];
  encontrado=false;

  //Formulario
  altaGrupo:FormGroup;
  editarGrupo:FormGroup;
  altaGrupoNoValido:boolean=false;
  editarGrupoNoValido:boolean=false;

  //Editar
  nombreGrupoEditar:String='';
 
  constructor(private servicioRock:ServiciosRocksService) {
    this.altaGrupo = new FormGroup({
      'nombre': new FormControl('',[Validators.required,Validators.minLength(2)]),
      'descripcion':new FormControl('',[Validators.required,Validators.minLength(2)]),
      'frame':new FormControl('',[Validators.required,Validators.minLength(2)])
    })

    this.editarGrupo = new FormGroup({
      'nombre': new FormControl('',[Validators.required,Validators.minLength(2)]),
      'descripcion':new FormControl('',[Validators.required,Validators.minLength(2)]),
      'frame':new FormControl ('',[Validators.required,Validators.minLength(2)])
    })
   }

  ngOnInit(): void {

    this.grupos=this.servicioRock.getGrupos(); //Recibe el array de objetos del servicio
  
    for (let index = 0; index < this.grupos.length; index++) {
      console.log(this.grupos[index]);
    }
  }

  //Funciones
  buscarGrupo(termino:string){
    this.grupoEncontrado=[];
    const filterItems = (query: string) => {
      return this.grupos.filter((arr) =>
        arr.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    }
    const array=filterItems(termino);
  
    if(array.length>=1){
        for (let i = 0;i < array.length; i++) {
            this.grupoEncontrado[i]=array[i];     
        }
        this.encontrado=true;
        console.log(this.encontrado);
    }else{
        console.log("No coincide, el array no tiene contenido");
    }
    return this.grupoEncontrado;
  }
  
  editar(objeto:Grupo){ //Obtener el objeto que hemos seleccionado
    console.log("editar"+ objeto.nombre);
    this.nombreGrupoEditar=objeto.nombre;
    this.editarGrupo = new FormGroup({
      'nombre': new FormControl(objeto.nombre,[Validators.required,Validators.minLength(2)]),
      'descripcion':new FormControl(objeto.descripcion,[Validators.required,Validators.minLength(2)]),
      'frame':new FormControl(objeto.frame,[Validators.required,Validators.minLength(2)]),
    })
  } 

  modificarGrupo(){ //Modificar contenido con el texto que le hemos pasado
    let nombre=this.editarGrupo.value.nombre;
    let descripcion=this.editarGrupo.value.descripcion;

    this.servicioRock.modificarGrupos(this.nombreGrupoEditar,nombre,descripcion);
  }

  borrar(objeto:Grupo){
    this.servicioRock.borrarGrupo(objeto); //Borrar grupo array original

    //Tenemos que borrarlo del arrayGruposEncontrados
    for (let index = 0; index < this.grupoEncontrado.length; index++) {
      if(this.grupoEncontrado[index].nombre == objeto.nombre){
        this.grupoEncontrado.splice(index,1); //Borramos la posicion
      }
    }
  }
  
  anadirGrupo(){
   this.servicioRock.anadirGrupo(this.altaGrupo); 
  }
}