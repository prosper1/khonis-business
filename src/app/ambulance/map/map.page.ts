import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  latitude = -25.7590793;
  longitude = 28.2068974;

  center = {
    latitude: -25.7590793,
    longitude: 28.2068974,
  };
  constructor( public geolocation: Geolocation) { }

  ngOnInit() {
  }

  // get location and save it to storage
  // Update latitude and longitude for map center and user position(marker)
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      });
  }






}
