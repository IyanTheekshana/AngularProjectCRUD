import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './app/auth/auth.component';
import { AuthGuard } from './app/auth/auth.guard';
import { RecipeDetailComponent } from './app/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './app/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './app/recipes/recipe-start/recipe-start.component';
import { RecipeResolverService } from './app/recipes/recipes-resolver.service';
import { RecipesComponent } from './app/recipes/recipes.component';
import { ShoppingListComponent } from './app/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeStartComponent,
      },
      {
        path: 'new-recipe',
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'signup',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
