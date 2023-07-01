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

import { AddCommentDto } from '../models/add-comment-dto';
import { BaseResponse } from '../models/base-response';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCommentAddCommentPost
   */
  static readonly ApiCommentAddCommentPostPath = '/api/Comment/addComment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentAddCommentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentAddCommentPost$Plain$Response(params?: {
    body?: AddCommentDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentAddCommentPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCommentAddCommentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentAddCommentPost$Plain(params?: {
    body?: AddCommentDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiCommentAddCommentPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCommentAddCommentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentAddCommentPost$Json$Response(params?: {
    body?: AddCommentDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CommentService.ApiCommentAddCommentPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCommentAddCommentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCommentAddCommentPost$Json(params?: {
    body?: AddCommentDto
  },
  context?: HttpContext

): Observable<BaseResponse> {

    return this.apiCommentAddCommentPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

}
