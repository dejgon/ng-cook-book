import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() title: string;
  opacity: boolean = false;
  constructor() { }

  ngOnInit() {
    
  }
  onMouseOver() {
    this.opacity = true;
  }

  onMouseLeave(){
    this.opacity = false;
  }

}
