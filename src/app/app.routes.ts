import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SaveRecipeComponent } from './save-recipe/save-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },

    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    },

    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Page'
    },

    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page'
    },

    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register Page'
    },

    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile Page'
    },

    {
        path: 'save-recipes',
        component: SaveRecipeComponent,
        title: 'Save Recipes Page'
    },

    {
        path: 'recipe/:id/view',
        component: ViewRecipeComponent,
        title: 'View Recipe Page'
    },

    {
        path: 'recipes',
        component: RecipesComponent,
        title: 'Recipes Page'
    },

    {
        path: '**',
        component: PageNotFoundComponent,
        title: 'Page Not Found'
    }
];
