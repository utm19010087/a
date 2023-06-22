import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model'; 
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlace: Place[] | undefined
  constructor(private placesService: PlacesService) {}

  ngOnInit()
  {
    this.loadedPlace = this.placesService.places;
  }
}
