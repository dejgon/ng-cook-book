import { Component, OnInit, Input} from '@angular/core';
import { RecipesService } from '../_services/recipes.service';
import { Recipe } from '../_models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() title: string;
  @Input() id: string;
  recipe: Recipe[];
  opacity: boolean = false;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    console.log("Recipe id: " + this.id);
    this.getRecipe();
  }
  onMouseOver() {
    this.opacity = true;
  }
  onMouseLeave(){
    this.opacity = false;
  }
  getRecipe(): void {
    this.recipesService.getRecipe(this.id)
    .subscribe(recipe => {
      this.recipe = recipe; });
  }

}
