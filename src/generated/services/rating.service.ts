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

import { AddRatingDto } from '../models/add-rating-dto';
import { BaseResponse } from '../models/base-response';

@Injectable({
  providedIn: 'root',
})
export class RatingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRatingAddRatingPost
   */
  static readonly ApiRatingAddRatingPostPath = '/api/Rating/addRating';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingAddRatingPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingAddRatingPost$Plain$Response(params?: {
    body?: AddRatingDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingAddRatingPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRatingAddRatingPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingAddRatingPost$Plain(params?: {
    body?: AddRatingDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiRatingAddRatingPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRatingAddRatingPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingAddRatingPost$Json$Response(params?: {
    body?: AddRatingDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, RatingService.ApiRatingAddRatingPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRatingAddRatingPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRatingAddRatingPost$Json(params?: {
    body?: AddRatingDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiRatingAddRatingPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

}
