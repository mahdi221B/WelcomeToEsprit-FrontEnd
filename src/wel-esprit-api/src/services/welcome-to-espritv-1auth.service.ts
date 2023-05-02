/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthentificationResponse } from '../models/authentification-response';
import { AuthenticationRequest } from '../models/authentication-request';
@Injectable({
  providedIn: 'root',
})
class WelcomeToEspritv1authService extends __BaseService {
  static readonly authenticatePath = '/WelcomeToEsprit/v1/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Se connecter
   *
   * Cette methode permet à un user de se connecter
   * @param body undefined
   * @return L'utilisateur est connecté
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthentificationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/WelcomeToEsprit/v1/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthentificationResponse>;
      })
    );
  }
  /**
   * Se connecter
   *
   * Cette methode permet à un user de se connecter
   * @param body undefined
   * @return L'utilisateur est connecté
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthentificationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthentificationResponse)
    );
  }
}

module WelcomeToEspritv1authService {
}

export { WelcomeToEspritv1authService }
