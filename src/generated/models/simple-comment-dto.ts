/* tslint:disable */
/* eslint-disable */
import { SimpleUserDto } from './simple-user-dto';
export interface SimpleCommentDto {
  id?: number;
  text?: null | string;
  title?: null | string;
  user?: SimpleUserDto;
}
