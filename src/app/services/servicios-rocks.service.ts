import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Grupo } from '../models/grupo/grupo.module';

@Injectable({
  providedIn: 'root'
})
export class ServiciosRocksService {
  noExiste:boolean=false;

  private grupos:Grupo[] = [
    {
        "nombre": "The Rolling Stones",
        "descripcion": "The Rolling Stones es una banda británica de rock originaria de Londres. La banda se formó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.2​ Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ronnie Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.",
        "frame": "https://www.youtube.com/embed/Jwtyn-L-2gQ"
    },
    {
        "nombre": "Led Zeppelin",
        "descripcion": "Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).",
        "frame":"https://www.youtube.com/embed/xbhCPt6PZIU"
      },
    {
        "nombre": "Queen",
        "descripcion": "Queen es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.",
        "frame": "https://www.youtube.com/embed/2ZBtPf7FOoM"
      },
    {
        "nombre": "Pink Floyd",
        "descripcion": "Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Es considerada un ícono cultural del siglo XX y una de las bandas más influyentes y aclamadas en la historia de la música, obtuvieron gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el paso del tiempo. Es conocida por sus canciones de alto contenido filosófico, la experimentación sónica, las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo. Sus ventas sobrepasan los 350 millones de álbumes vendidos en todo el mundo,​ 97,5 millones de ellos solamente en los Estados Unidos.",
        "frame": "https://www.youtube.com/embed/YR5ApYxkU-U"
      },
    {
        "nombre": "Deep Purple",
        "descripcion": "Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath. Su música ha incorporado elementos del rock progresivo, rock sinfónico, rock psicodélico, blues rock, funk rock, britpop y la música clásica. Deep Purple ha vendido más de 150 millones de discos en todo el mundo",
        "frame": "https://www.youtube.com/embed/ikGyZh0VbPQ"
      },
    {
        "nombre": "AD/CD",
        "descripcion": "AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm y Angus Young. Sus álbumes se han vendido en un total estimado de 200 millones de copias,3​4​ embarcándose en giras multitudinarias por todo el mundo, y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.5​6​7​8​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.9​ Mucho de ello se debe al extravagante estilo de su guitarrista principal y símbolo visual, Angus Young; quien asume el rol de guitarrista principal durante los conciertos, gracias a sus dinámicos y adrenalínicos despliegues escénicos uniformado de colegial callejero.10​ Al comienzo, los conciertos y tiempos por los cuales sufrieron diversos cambios en su alineación.11​12​ En 1974, la llegada del cantante Bon Scott se convertiría en pieza clave del éxito del grupo. Su presencia en escena, lo convirtió en uno de los personajes más carismáticos de la historia del hard rock .13​14​15​ La formación se estabilizaría con Cliff Williams (bajo) y Phil Rudd.",
        "frame": "https://www.youtube.com/embed/gEPmA3USJdI"
      },
    {
        "nombre": "The Ramones",
        "descripcion": "Los Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós años más tarde, en 1996. Pioneros y líderes del naciente punk,1​2​ cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas y letras muy simples o incluso sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970:3​4​ con sus largos solos de guitarra, las complejas canciones de rock progresivo y sus enigmáticas letras.5​ Su sonido se caracteriza por ser rápido y directo, con influencias del rockabilly de los años 1950, el surf rock, The Beatles, The Who, The Velvet Underground, las bandas de chicas de los años 1960 como The Shangri-Las y el garage protopunk de MC5 y The Stooges",
        "frame": "https://www.youtube.com/embed/xuOnePNlOgY"
      },
    {
        "nombre": "Kiss",
        "descripcion": "Kiss (estilizado KISS) es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.2​ Conocidos por su maquillaje facial y sus extravagantes trajes, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa. Si se tienen en cuenta los álbumes en solitario de 1978, Kiss ha conseguido treinta discos de oro de la RIAA hacia 2015 y se la considera la banda estadounidense que ha recibido más de estas certificaciones.nota 1​4​ El conjunto ha vendido más de 80 millones de álbumes en todo el mundo y veinticinco millones solo en los Estados Unidos.5​ A pesar de no haber alcanzado la primera posición del Billboard 200, ha situado veintiséis de sus trabajos entre los cuarenta primeros puestos.6​ Desde su formación, los miembros de Kiss asumieron personalidades acordes con los maquillajes y vestimenta que llevaban, así Simmons asumió el rol de «Demon», Stanley el de «Starchild», Criss el de «Catman» y Frehley el de «Space Ace» o «Spaceman».",
        "frame": "https://www.youtube.com/embed/ZhIsAZO5gl0"
      }
  ];

  constructor() { }

  //FUNCIONES
  getGrupos():Grupo[]{
    return this.grupos;
  }

  borrarGrupo(grupo:Grupo){
    for (let index = 0; index < this.grupos.length; index++) {
      if(this.grupos[index].nombre == grupo.nombre){
        this.grupos.splice(index,1); //Borramos la posicion
      }
    }
  }

  modificarGrupos(grupo:String,nombre:String,descripcion:String){
    console.log(grupo);
    for (let index = 0; index < this.grupos.length; index++) {
      if(this.grupos[index].nombre == grupo){
        this.grupos[index].nombre = nombre;
        this.grupos[index].descripcion = descripcion;
      }
    }
  }

  anadirGrupo(nuevoGrupo:FormGroup){
    for (let index = 0; index < this.grupos.length; index++) {
      if(this.grupos[index].nombre != nuevoGrupo.value.nombre){
        this.noExiste=true;
      }
    }
    if(this.noExiste){
      let nuevo={
        nombre: nuevoGrupo.value.nombre,
        descripcion: nuevoGrupo.value.descripcion,
        frame: nuevoGrupo.value.frame
      }
      this.grupos.push(nuevo);
    }
  }
}
