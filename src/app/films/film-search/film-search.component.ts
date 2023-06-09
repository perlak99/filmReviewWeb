import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DirectorService, FilmService, GenreService } from '../../../generated/services';
import { Genre } from '../../../generated/models/genre';
import { SimpleDirectorDto } from '../../../generated/models/simple-director-dto';
import { GetFilmListDto } from 'src/generated/models';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})

export class FilmSearchComponent implements OnInit {

  filmSearchTitle = "Search films";

  filmsFilterForm: FormGroup;

  ratings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pageSizes: number[] = [10, 20, 30];
  genres: Genre[] = [];
  directors: SimpleDirectorDto[] = [];
  films: GetFilmListDto[];

  constructor(private formBuilder: FormBuilder,
    private filmService: FilmService,
    private directorService: DirectorService,
    private genreService: GenreService) {

  }

  ngOnInit() {
    this.filmsFilterForm = this.formBuilder.group({
      SearchPhrase: [''],
      ReleaseYearFrom: [],
      ReleaseYearTo: [],
      Director: [],
      Genre: [],
      MinAverageRating: [],
      PageSize: [10],
      Page: [1]
    });

    this.genreService.apiGenreGetGenresGet$Json().subscribe((res) => {
      if (res?.data) {
        this.genres = res.data;
      }
    })

    this.directorService.apiDirectorGetDirectorsGet$Json().subscribe((res) => {
      if(res?.data) {
        this.directors = res.data;
      }
    })

    this.searchFilms();
  }

  searchFilms() {
    const formData = this.filmsFilterForm.value;
    formData.GenreId = this.getGenreId(this.filmsFilterForm.controls['Genre'].value);
    formData.DirectorId = this.getDirectorId(this.filmsFilterForm.controls['Director'].value);

    this.filmService.apiFilmGetFilmsGet$Json(formData).subscribe((res) => {
      if (res?.statusCode == 200) {
        this.films = res.data;
      }
    })
  }

  getGenreId(name: string) {
    return this.genres?.find(genre => genre.name === name)?.id;
  }

  getDirectorId(name: string) {
    return this.directors?.find(director => `${director.firstName} ${director.lastName}` === name)?.id;
  }

  setRating(rating: number) {
    this.filmsFilterForm.patchValue({ MinAverageRating: rating });
  }

  setPageSize(size: number) {
    this.filmsFilterForm.patchValue({ PageSize: size });
  }
}