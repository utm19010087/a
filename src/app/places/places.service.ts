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
      "Coscomatepec",
      "Sin duda te encantará llegar a este lugar entre montañas con la característica neblina ¡y con un rico olor a café! ",
      "https://www.mexicodestinos.com/blog/wp-content/uploads/2017/06/Coscomatepec.png",
      4250
    ),
    new Place
    (
      "p2",
      "Orizaba",
      "ciudad de las aguas alegres",
      "https://www.gob.mx/cms/uploads/article/main_image/102841/Copia_de_ajijic-jalisco-dane-strom-2601_2.jpg",
      4290
    ),
    new Place
    (
      "p3",
      "Zozocolco de Hidalgo",
      "entre los cerros de la Golondrina, Pelón y cerro Buena Vista",
      "https://www.gob.mx/cms/uploads/article/main_image/84635/A_lamos-Parroquia-de-La-Puri_sima-Concepcio_n-web.jpg",
      4410
    ),
    new Place
    (
      "p4",
      "Papantla",
      "Casa de los Voladores de Papantla",
      "https://www.mexicodestinos.com/blog/wp-content/uploads/2017/06/Voladores_de_Papantla.png",
      4480
    ),
    new Place
    (
      "p5",
      "Coatepec",
      "Parque Hidalgo",
      "https://www.mexicodestinos.com/blog/wp-content/uploads/2017/06/Parroquia_San_Jeronimo_Coatepec.jpg",
      4580
    ),
    new Place
    (
      "p6",
      "Xico",
      "es un bello pueblo mágico que te embruja por su cálido ambiente",
      "https://www.mexicodestinos.com/blog/wp-content/uploads/2017/06/Iglesia_de_Xico.png",
      4580
    )
  ];

  get places()
  {
    return [...this._places];
  }

  constructor() { }
}
