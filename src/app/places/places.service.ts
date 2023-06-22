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
      "Guadalajara, Jal",
      "No po chi, guadalajara",
      "https://i.ytimg.com/vi/Vyni9THgdSc/hqdefault.jpg",
      1244
    ),
    new Place
    (
      "p2",
      "Oaxaca",
      "Oaxacala",
      "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/categoryimages/32/15/32153_v36.jpeg",
      1312
    ),
    new Place
    (
      "p3",
      "Aguascalientes, Ags",
      "Tierra de la gente buena",
      "https://www.lugaresturisticosenmexico.com/wp-content/uploads/2020/06/200533-Aguascalientes.jpg",
      1214
    ),
    new Place
    (
      "p4",
      "Aguascalientes, El llano",
      "Tierra de la gente",
      "https://www.liderempresarial.com/wp-content/uploads/2017/05/El-Llano-02.jpg 7nmbn ",
      1325
    )
  ];

  get places()
  {
    return [...this._places];
  }

  constructor() { }
}
