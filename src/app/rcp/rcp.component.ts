import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_models/recipe';
import { RecipesService } from '../_services/recipes.service';

@Component({
  selector: 'app-rcp',
  templateUrl: './rcp.component.html',
  styleUrls: ['./rcp.component.css']
})
export class RcpComponent implements OnInit {
  recipe: Recipe[];
  id = '5c8c095eedc94a2820f4e712';

  constructor(private recipesService: RecipesService) {}
  ngOnInit() {
    this.getRecipe();
  }
  getRecipe(): void {
    this.recipesService.getRecipe(this.id)
    .subscribe(recipe => this.recipe = recipe);
    console.log(this.recipe);
  }

}
