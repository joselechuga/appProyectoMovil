
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
})
export class HomePage {
  data: any; 

  constructor(private activeroute: ActivatedRoute,
     private router: Router,
     public navCtrl : NavController) {

  }

  

}
