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
import { BaseResponse } from '../models/base-response';
import { GetFilmDtoDataResponse } from '../models/get-film-dto-data-response';
import { GetFilmListDtoListDataResponse } from '../models/get-film-list-dto-list-data-response';
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
   * To access only the response body, use `apiFilmAddFilmPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmAddFilmPost$Plain$Response(params?: {
    body?: AddFilmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmAddFilmPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmAddFilmPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmAddFilmPost$Plain(params?: {
    body?: AddFilmDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiFilmAddFilmPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmAddFilmPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmAddFilmPost$Json$Response(params?: {
    body?: AddFilmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmAddFilmPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmAddFilmPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmAddFilmPost$Json(params?: {
    body?: AddFilmDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiFilmAddFilmPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiFilmGetFilmGet
   */
  static readonly ApiFilmGetFilmGetPath = '/api/Film/getFilm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGetFilmGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmGet$Plain$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GetFilmDtoDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmGetFilmGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetFilmDtoDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGetFilmGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmGet$Plain(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<GetFilmDtoDataResponse> {

    return this.apiFilmGetFilmGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<GetFilmDtoDataResponse>) => r.body as GetFilmDtoDataResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGetFilmGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmGet$Json$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GetFilmDtoDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmGetFilmGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetFilmDtoDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGetFilmGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmGet$Json(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<GetFilmDtoDataResponse> {

    return this.apiFilmGetFilmGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<GetFilmDtoDataResponse>) => r.body as GetFilmDtoDataResponse)
    );
  }

  /**
   * Path part for operation apiFilmGetFilmsGet
   */
  static readonly ApiFilmGetFilmsGetPath = '/api/Film/getFilms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGetFilmsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmsGet$Plain$Response(params?: {
    ReleaseYearFrom?: number;
    ReleaseYearTo?: number;
    DirectorId?: number;
    GenreId?: number;
    MinAverageRating?: number;
    PageSize?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GetFilmListDtoListDataResponse>> {

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
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetFilmListDtoListDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGetFilmsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmsGet$Plain(params?: {
    ReleaseYearFrom?: number;
    ReleaseYearTo?: number;
    DirectorId?: number;
    GenreId?: number;
    MinAverageRating?: number;
    PageSize?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<GetFilmListDtoListDataResponse> {

    return this.apiFilmGetFilmsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<GetFilmListDtoListDataResponse>) => r.body as GetFilmListDtoListDataResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGetFilmsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmsGet$Json$Response(params?: {
    ReleaseYearFrom?: number;
    ReleaseYearTo?: number;
    DirectorId?: number;
    GenreId?: number;
    MinAverageRating?: number;
    PageSize?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GetFilmListDtoListDataResponse>> {

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
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetFilmListDtoListDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGetFilmsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGetFilmsGet$Json(params?: {
    ReleaseYearFrom?: number;
    ReleaseYearTo?: number;
    DirectorId?: number;
    GenreId?: number;
    MinAverageRating?: number;
    PageSize?: number;
    Page?: number;
  },
  context?: HttpContext

): Observable<GetFilmListDtoListDataResponse> {

    return this.apiFilmGetFilmsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<GetFilmListDtoListDataResponse>) => r.body as GetFilmListDtoListDataResponse)
    );
  }

  /**
   * Path part for operation apiFilmDeleteFilmDelete
   */
  static readonly ApiFilmDeleteFilmDeletePath = '/api/Film/deleteFilm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmDeleteFilmDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmDeleteFilmDelete$Plain$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmDeleteFilmDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmDeleteFilmDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmDeleteFilmDelete$Plain(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiFilmDeleteFilmDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmDeleteFilmDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmDeleteFilmDelete$Json$Response(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmDeleteFilmDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmDeleteFilmDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmDeleteFilmDelete$Json(params?: {
    id?: number;
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiFilmDeleteFilmDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiFilmUpdateFilmPut
   */
  static readonly ApiFilmUpdateFilmPutPath = '/api/Film/updateFilm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmUpdateFilmPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmUpdateFilmPut$Plain$Response(params?: {
    body?: UpdateFilmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmUpdateFilmPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmUpdateFilmPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmUpdateFilmPut$Plain(params?: {
    body?: UpdateFilmDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiFilmUpdateFilmPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmUpdateFilmPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmUpdateFilmPut$Json$Response(params?: {
    body?: UpdateFilmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FilmService.ApiFilmUpdateFilmPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmUpdateFilmPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmUpdateFilmPut$Json(params?: {
    body?: UpdateFilmDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiFilmUpdateFilmPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

}
