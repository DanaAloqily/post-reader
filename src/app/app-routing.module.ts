import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { PostsComponent } from './posts/posts.component';
const routes: Routes = [
  {path:'',component: PostsComponent}, // root path
  {path:'recipe', component: RecipeComponent} //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
