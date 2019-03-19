import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { RcpComponent } from './rcp/rcp.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'recipe/:id', component: RecipeDetailComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'profile/:user_id', component: ProfileComponent},
  { path: 'post', component: PostComponent},
  { path: 'rcp', component: RcpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
