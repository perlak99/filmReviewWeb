import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  filmSearchTitle = "Search film";

  filmsFilterForm: FormGroup;
  directors: any[] = [];
  genres: any[] = [];
  ratings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pageSizes: number[] = [10, 20, 30];

  constructor(private formBuilder: FormBuilder) {
    this.filmsFilterForm = this.formBuilder.group({
      searchPhrase: [''],
      releaseYearFrom: [],
      releaseYearTo: [],
      directorId: [],
      genreId: [],
      minAverageRating: [],
      pageSize: [],
      page: []
    });
  }

  ngOnInit() {
    this.loadDirectors();
    this.loadGenres();
  }

  loadDirectors() {
  }

  loadGenres() {
  }

  searchFilms() {
    const formData = this.filmsFilterForm.value;
  }

  setRating(rating: number) {
    this.filmsFilterForm.patchValue({ minAverageRating: rating });
  }

  setPageSize(size: number) {
    this.filmsFilterForm.patchValue({ pageSize: size });
  }
}