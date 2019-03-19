import { Component, OnInit, OnChanges } from '@angular/core';
import { Recipe } from '../_models/recipe';
import { RecipesService } from '../_services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {}
  ngOnInit() {
    console.log("On init");
    this.recipesService.getAllRecipes()
    .subscribe(recipe => this.recipes = recipe);
  }
  getAllRecipes(): void {
    this.recipesService.getAllRecipes()
    .subscribe(recipe => this.recipes = recipe);
  }
  onMouseOver() {
  }
}
