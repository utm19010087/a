import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places : Place[] = 
  [
    new Place
    (
      "p1",
      "Aculco, Estado de México",
      "Este Pueblo Mágico reside entre montañas, peñas y cascadas, donde el sol inunda de luz calles, callejones y refleja su luz en sus blancas paredes",
      "https://www.gob.mx/cms/uploads/image/file/530648/Mexico_Aculco_Cascada-Tixhin_u-web.jpg",
      350
    ),
    new Place
    (
      "p2",
      "Ajijic, Jalisco",
      "Fundada en 1531, su nombre proviene del náhuatl Axixic que significa 'donde se derrama el agua' o 'donde brota el agua', es una de las villas más antiguas de México.",
      "https://www.gob.mx/cms/uploads/article/main_image/102841/Copia_de_ajijic-jalisco-dane-strom-2601_2.jpg",
      390
    ),
    new Place
    (
      "p3",
      "Álamos, Sonora",
      "Muy cerca de la frontera con Sinaloa y Chihuahua se encuentra Álamos, un Pueblo Mágico que sorprende por su arquitectura y tradiciones",
      "https://www.gob.mx/cms/uploads/article/main_image/84635/A_lamos-Parroquia-de-La-Puri_sima-Concepcio_n-web.jpg",
      410
    ),
    new Place
    (
      "p4",
      "Amealco de Bonfil, Querétaro",
      " Es un lugar especial por sus cuerpos de agua, y sus paisajes boscosos",
      "https://www.gob.mx/cms/uploads/image/file/531307/Amealco-Quere_taro-Cerro-de-la-Cruz-web.jpg",
      480
    ),
    new Place
    (
      "p5",
      "Aquismón, San Luis Potosí",
      "El Pueblo Mágico de Aquismón es la Meca para los amantes de los deportes de aventura como: abseiling, climbing, hiking, kayaking, mountain biking, parachiting rafting, o wingsuit flying",
      "https://www.gob.mx/cms/uploads/article/main_image/85296/Aquismon-Cascada-Tamul-web.jpg",
      580
    )
  ];

  get places()
  {
    return [...this._places];
  }

  constructor() { }
}
