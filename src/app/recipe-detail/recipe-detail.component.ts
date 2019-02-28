import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})

export class RecipeDetailComponent implements OnInit {

  @Input() title: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRecipe();
  }
  getRecipe(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.title = title;
  }
}
