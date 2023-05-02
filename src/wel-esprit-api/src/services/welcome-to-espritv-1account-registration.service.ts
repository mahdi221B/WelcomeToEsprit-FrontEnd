/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class WelcomeToEspritv1accountRegistrationService extends __BaseService {
  static readonly activationPath = '/WelcomeToEsprit/v1/activation';
  static readonly savePath = '/WelcomeToEsprit/v1/register';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Activation d'un user
   *
   * Cette methode permet d'activer un user par son mail
   * @param token undefined
   * @return Ce compte est activé
   */
  activationResponse(token: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (token != null) __params = __params.set('token', token.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/activation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Activation d'un user
   *
   * Cette methode permet d'activer un user par son mail
   * @param token undefined
   * @return Ce compte est activé
   */
  activation(token: string): __Observable<string> {
    return this.activationResponse(token).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Enregistrer un nouveau user
   *
   * Cette methode permet d'enregistrer  un user
   * @param body undefined
   * @return L'objet user est crée / modifié
   */
  saveResponse(body?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/WelcomeToEsprit/v1/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Enregistrer un nouveau user
   *
   * Cette methode permet d'enregistrer  un user
   * @param body undefined
   * @return L'objet user est crée / modifié
   */
  save(body?: User): __Observable<User> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module WelcomeToEspritv1accountRegistrationService {
}

export { WelcomeToEspritv1accountRegistrationService }
