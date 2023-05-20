/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddFilmDto } from '../models/add-film-dto';
import { UpdateFilmDto } from '../models/update-film-dto';

@Injectable({
  providedIn: 'root',
})
export class FilmService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFilmAddFilmPost
   */
  static readonly ApiFilmAddFilmPostPath = '/api/Film/addFilm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmAddFilmPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmAddFilmPost$Response(params?: {
    body?: AddFilmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmAddFilmPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmAddFilmPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmAddFilmPost(params?: {
    body?: AddFilmDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFilmAddFilmPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiFilmGetFilmGet
   */
  static readonly ApiFilmGetFilmGetPath = '/api/Film/getFilm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGetFilmGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmGet$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmGetFilmGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGetFilmGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmGet(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFilmGetFilmGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiFilmGetFilmsGet
   */
  static readonly ApiFilmGetFilmsGetPath = '/api/Film/getFilms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGetFilmsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmsGet$Response(params?: {
    ReleaseYearFrom?: number;
    ReleaseYearTo?: number;
    DirectorId?: number;
    GenreId?: number;
    MinAverageRating?: number;
    PageSize?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmGetFilmsGetPath, 'get');
    if (params) {
      rb.query('ReleaseYearFrom', params.ReleaseYearFrom, {});
      rb.query('ReleaseYearTo', params.ReleaseYearTo, {});
      rb.query('DirectorId', params.DirectorId, {});
      rb.query('GenreId', params.GenreId, {});
      rb.query('MinAverageRating', params.MinAverageRating, {});
      rb.query('PageSize', params.PageSize, {});
      rb.query('Page', params.Page, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGetFilmsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmsGet(params?: {
    ReleaseYearFrom?: number;
    ReleaseYearTo?: number;
    DirectorId?: number;
    GenreId?: number;
    MinAverageRating?: number;
    PageSize?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFilmGetFilmsGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiFilmDeleteFilmDelete
   */
  static readonly ApiFilmDeleteFilmDeletePath = '/api/Film/deleteFilm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmDeleteFilmDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmDeleteFilmDelete$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmDeleteFilmDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmDeleteFilmDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmDeleteFilmDelete(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFilmDeleteFilmDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiFilmUpdateFilmPut
   */
  static readonly ApiFilmUpdateFilmPutPath = '/api/Film/updateFilm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmUpdateFilmPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmUpdateFilmPut$Response(params?: {
    body?: UpdateFilmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmUpdateFilmPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmUpdateFilmPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmUpdateFilmPut(params?: {
    body?: UpdateFilmDto
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFilmUpdateFilmPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
