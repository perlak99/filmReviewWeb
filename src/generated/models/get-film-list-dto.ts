/* tslint:disable */
/* eslint-disable */
import { Genre } from './genre';
import { SimpleDirectorDto } from './simple-director-dto';
export interface GetFilmListDto {
  director?: SimpleDirectorDto;
  genre?: Genre;
  id?: number;
  releaseYear?: number;
  title?: null | string;
}
