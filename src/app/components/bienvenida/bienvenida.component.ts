import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platillo } from 'src/app/models/platillo';
import { PlatillosService } from 'src/app/services/platillos/platillos.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  platillo!: Platillo; 

  constructor(
    private platilloService: PlatillosService,
    private router: Router) { }

  ngOnInit(): void {
    this.platilloService.getRandomMeal().subscribe((res:any) => {
      this.platillo = res.meals[0];
      console.log("Random meal: ", this.platillo);
    });
  }

  goToDetails() {
    if(this.platillo)
    this.router.navigate(['/details', {mealId: this.platillo.idMeal}]);
  }

}
