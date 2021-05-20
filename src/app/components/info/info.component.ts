import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Grupo } from 'src/app/models/grupo/grupo.module';
import { ServiciosRocksService } from 'src/app/services/servicios-rocks.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  grupos:Grupo[]=[]; //Contiene la lista de los grupos
  grupoInf:any=[];

  url:any;

  constructor(private servicioRock:ServiciosRocksService,
              private route:ActivatedRoute,
              private sanitizer: DomSanitizer) {
               }

  ngOnInit(): void {
    const nombreGrupo= this.route.snapshot.paramMap.get("nombre");
    
    this.grupos=this.servicioRock.getGrupos(); //Recibe el array de objetos del servicio
  
    this.grupoInf=(this.grupos.filter(r => r.nombre === nombreGrupo) != null || this.grupos.filter(r => r.nombre === nombreGrupo) != undefined ) ? this.grupos.filter(r => r.nombre === nombreGrupo)[0] : [];
    console.log(this.grupoInf);

    this.url=this.sanitizer.bypassSecurityTrustResourceUrl(this.grupoInf.frame);
  }
}
