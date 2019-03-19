import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipesService } from '../_services/recipes.service';
import { Recipe } from '../_models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})

export class RecipeDetailComponent implements OnInit {
  recipe: Recipe[];
  @Input() id: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipesService: RecipesService
  ) { }
  ngOnInit() {
    this.getRecipe();
    console.log(this.id);
    console.log(this.recipe);
  }
  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.recipesService.getRecipe(this.id)
    .subscribe(recipe => this.recipe = recipe);
  }
}
