import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/generated/services';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.filmService.apiFilmGetFilmGet$Json({id: 5}).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}