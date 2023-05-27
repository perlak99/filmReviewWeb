/* tslint:disable */
/* eslint-disable */
import { Genre } from './genre';
import { SimpleCommentDto } from './simple-comment-dto';
import { SimpleDirectorDto } from './simple-director-dto';
export interface GetFilmDto {
  averageRating?: number;
  comments?: null | Array<SimpleCommentDto>;
  director?: SimpleDirectorDto;
  genre?: Genre;
  id?: number;
  releaseYear?: number;
  title?: null | string;
}
