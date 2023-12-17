import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
    { path: '', redirectTo: '/signIn', pathMatch: 'full' },
    { path:'signIn', component: SigninComponent}
];
