import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { forkJoin, map } from 'rxjs';
import { Platillo } from 'src/app/models/platillo';
import { PlatillosService } from 'src/app/services/platillos/platillos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
  @ViewChild('mealsPaginator', {static: true}) paginator!: MatPaginator;
  displayedColumns = ["Id", "Name"];
  meals: Platillo[] = [];
  dataSource!: MatTableDataSource<Platillo>;

  @ViewChild("nav", { read: DragScrollComponent })
  ds!: DragScrollComponent;

  areas: any[] = [];
  categories:any[] = [];
  ingredients: any[] = [];

  constructor(
    private mealService: PlatillosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMealsList();
    this.getCategoriesAndMore();
  }

  getMealsList() {
    this.mealService.getMealsList().subscribe((mealsList: any) => {
      this.meals = mealsList['meals'];
      this.dataSource=new MatTableDataSource<Platillo>(mealsList['meals']);
      this.dataSource.paginator = this.paginator;
      console.log("Meals List: ", mealsList);
    });
  }

  getCategoriesAndMore() {
    forkJoin(
      this.mealService.getAreas(),
      this.mealService.getCategories(),
      this.mealService.getIngredients()
    ).subscribe((res) => {
      console.log("Get categories: ", res);
      this.areas = res[0]['meals'];
      this.categories = res[1]['meals'];
      this.ingredients = res[2]['meals']; 
    });    
  }

  toDetails(mealId: string) {
    this.router.navigate(['/details', {mealId: mealId}]);
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

}
