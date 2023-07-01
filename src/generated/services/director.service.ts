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

import { AddDirectorDto } from '../models/add-director-dto';
import { BaseResponse } from '../models/base-response';
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

  /**
   * Path part for operation apiDirectorAddDirectorPost
   */
  static readonly ApiDirectorAddDirectorPostPath = '/api/Director/addDirector';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorAddDirectorPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorAddDirectorPost$Plain$Response(params?: {
    body?: AddDirectorDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DirectorService.ApiDirectorAddDirectorPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDirectorAddDirectorPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorAddDirectorPost$Plain(params?: {
    body?: AddDirectorDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiDirectorAddDirectorPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorAddDirectorPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorAddDirectorPost$Json$Response(params?: {
    body?: AddDirectorDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DirectorService.ApiDirectorAddDirectorPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDirectorAddDirectorPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDirectorAddDirectorPost$Json(params?: {
    body?: AddDirectorDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiDirectorAddDirectorPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiDirectorChangeDirectorStatusPut
   */
  static readonly ApiDirectorChangeDirectorStatusPutPath = '/api/Director/changeDirectorStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorChangeDirectorStatusPut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorChangeDirectorStatusPut$Plain$Response(params?: {
    directorId?: number;
    statusId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DirectorService.ApiDirectorChangeDirectorStatusPutPath, 'put');
    if (params) {
      rb.query('directorId', params.directorId, {});
      rb.query('statusId', params.statusId, {});
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
   * To access the full response (for headers, for example), `apiDirectorChangeDirectorStatusPut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorChangeDirectorStatusPut$Plain(params?: {
    directorId?: number;
    statusId?: number;
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiDirectorChangeDirectorStatusPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDirectorChangeDirectorStatusPut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorChangeDirectorStatusPut$Json$Response(params?: {
    directorId?: number;
    statusId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DirectorService.ApiDirectorChangeDirectorStatusPutPath, 'put');
    if (params) {
      rb.query('directorId', params.directorId, {});
      rb.query('statusId', params.statusId, {});
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
   * To access the full response (for headers, for example), `apiDirectorChangeDirectorStatusPut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDirectorChangeDirectorStatusPut$Json(params?: {
    directorId?: number;
    statusId?: number;
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiDirectorChangeDirectorStatusPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

}
