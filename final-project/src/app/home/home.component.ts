import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  constructor() { }
  ngOnInit(): void {
    // this.getTrendingMovies();
  }
  getTrendingMovies() {
    // this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
    // this.trendingMovies = movies;
    // console.log(this.trendingMovies)
    // });
  }
}
