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

import { SimpleDirectorDtoListDataResponse } from '../models/simple-director-dto-list-data-response';

@Injectable({
  providedIn: 'root',
})
export class DirectorService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDirectorGetDirectorsGet
   */
  static readonly ApiDirectorGetDirectorsGetPath = '/api/Director/getDirectors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorGetDirectorsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SimpleDirectorDtoListDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DirectorService.ApiDirectorGetDirectorsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SimpleDirectorDtoListDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDirectorGetDirectorsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<SimpleDirectorDtoListDataResponse> {

    return this.apiDirectorGetDirectorsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SimpleDirectorDtoListDataResponse>) => r.body as SimpleDirectorDtoListDataResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorGetDirectorsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SimpleDirectorDtoListDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DirectorService.ApiDirectorGetDirectorsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SimpleDirectorDtoListDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDirectorGetDirectorsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorGetDirectorsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<SimpleDirectorDtoListDataResponse> {

    return this.apiDirectorGetDirectorsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SimpleDirectorDtoListDataResponse>) => r.body as SimpleDirectorDtoListDataResponse)
    );
  }

}
