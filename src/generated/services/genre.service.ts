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

import { GenreListDataResponse } from '../models/genre-list-data-response';

@Injectable({
  providedIn: 'root',
})
export class GenreService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGenreGetGenresGet
   */
  static readonly ApiGenreGetGenresGetPath = '/api/Genre/getGenres';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGenreGetGenresGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGenreGetGenresGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GenreListDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GenreService.ApiGenreGetGenresGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GenreListDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGenreGetGenresGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGenreGetGenresGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<GenreListDataResponse> {

    return this.apiGenreGetGenresGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<GenreListDataResponse>) => r.body as GenreListDataResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGenreGetGenresGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGenreGetGenresGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<GenreListDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GenreService.ApiGenreGetGenresGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GenreListDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGenreGetGenresGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGenreGetGenresGet$Json(params?: {
  },
  context?: HttpContext

): Observable<GenreListDataResponse> {

    return this.apiGenreGetGenresGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<GenreListDataResponse>) => r.body as GenreListDataResponse)
    );
  }

}
