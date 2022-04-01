import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor(
    private http: HttpClient
  ) { }

    getRandomMeal() {
      return this.http.get<any>(`${environment.baseUrl}random.php`);
    }

    getMealDetail(mealId: string) {
      return this.http.get<any>(`${environment.baseUrl}lookup.php?i=${mealId}`);
    }

    getMealsList() {
      return this.http.get<any>(`${environment.baseUrl}search.php?s=`);
    }

    getCategories() {
      return this.http.get<any>(`${environment.baseUrl}list.php?c=list`);
    }

    getAreas() {
      return this.http.get<any>(`${environment.baseUrl}list.php?a=list`);
    }

    getIngredients(){
      return this.http.get<any>(`${environment.baseUrl}list.php?i=list`);
    } 
}
