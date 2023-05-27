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

import { AuthenticateDto } from '../models/authenticate-dto';
import { BaseResponse } from '../models/base-response';
import { RegisterDto } from '../models/register-dto';
import { StringDataResponse } from '../models/string-data-response';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserAuthenticatePost
   */
  static readonly ApiUserAuthenticatePostPath = '/api/User/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthenticatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticatePost$Plain$Response(params?: {
    body?: AuthenticateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StringDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthenticatePostPath, 'post');
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
        return r as StrictHttpResponse<StringDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthenticatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticatePost$Plain(params?: {
    body?: AuthenticateDto
  },
  context?: HttpContext

): Observable<StringDataResponse> {

    return this.apiUserAuthenticatePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<StringDataResponse>) => r.body as StringDataResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAuthenticatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticatePost$Json$Response(params?: {
    body?: AuthenticateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<StringDataResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAuthenticatePostPath, 'post');
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
        return r as StrictHttpResponse<StringDataResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAuthenticatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAuthenticatePost$Json(params?: {
    body?: AuthenticateDto
  },
  context?: HttpContext

): Observable<StringDataResponse> {

    return this.apiUserAuthenticatePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<StringDataResponse>) => r.body as StringDataResponse)
    );
  }

  /**
   * Path part for operation apiUserRegisterPost
   */
  static readonly ApiUserRegisterPostPath = '/api/User/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisterPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost$Plain$Response(params?: {
    body?: RegisterDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisterPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserRegisterPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost$Plain(params?: {
    body?: RegisterDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiUserRegisterPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisterPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost$Json$Response(params?: {
    body?: RegisterDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisterPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterPost$Json(params?: {
    body?: RegisterDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiUserRegisterPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserGrantRolePost
   */
  static readonly ApiUserGrantRolePostPath = '/api/User/grantRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGrantRolePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGrantRolePost$Plain$Response(params?: {
    userId?: number;
    roleId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGrantRolePostPath, 'post');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('roleId', params.roleId, {});
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
   * To access the full response (for headers, for example), `apiUserGrantRolePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGrantRolePost$Plain(params?: {
    userId?: number;
    roleId?: number;
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiUserGrantRolePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGrantRolePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGrantRolePost$Json$Response(params?: {
    userId?: number;
    roleId?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGrantRolePostPath, 'post');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('roleId', params.roleId, {});
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
   * To access the full response (for headers, for example), `apiUserGrantRolePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGrantRolePost$Json(params?: {
    userId?: number;
    roleId?: number;
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiUserGrantRolePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

}
