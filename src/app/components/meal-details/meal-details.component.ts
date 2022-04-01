import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platillo } from 'src/app/models/platillo';
import { PlatillosService } from 'src/app/services/platillos/platillos.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {
  meal!: Platillo;
  measurements: any[] = [];

  constructor(
    private aRouter: ActivatedRoute,
    private mealService: PlatillosService,
    private sanitizer : DomSanitizer
    ) { }

  ngOnInit(): void {
    const mealId: string | null = this.aRouter.snapshot.paramMap.get('mealId');
    this.getMealDetail(mealId? mealId:"");
  }

  private getMealDetail(mealId: string) {
    this.mealService.getMealDetail(mealId).subscribe((res: any) => {
      this.meal = res.meals[0];
      let index;
      Object.keys(res.meals[0]).filter(x => x.includes("strMeasure")).forEach((key: string) => {
        index = key.match(/(\d+)/);
        if((res.meals[0][key] as String).trim().length > 0)
        this.measurements.push({
          measure: res.meals[0][key],
          ingredient: res.meals[0][`strIngredient${index![0]}`]
        });
      });
      console.log(this.measurements);
    });
  }

  getYoutubeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + url.substring(url.lastIndexOf('=') + 1));
  }

}
