import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent },
    { path: '***', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],

    exports: [RouterModule],

})
export class AppRoutingModule { }
