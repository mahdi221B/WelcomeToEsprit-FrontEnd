/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class WelcomeToEspritv1qrcodeGenService extends __BaseService {
  static readonly generateQrcodePath = '/WelcomeToEsprit/v1/qrcode';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Générer un qrcode
   *
   * Cette methode permet de générer un qrcode par l'identifiant de l'utilisateur
   * @param identifier undefined
   */
  generateQrcodeResponse(identifier: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (identifier != null) __params = __params.set('identifier', identifier.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/qrcode`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Générer un qrcode
   *
   * Cette methode permet de générer un qrcode par l'identifiant de l'utilisateur
   * @param identifier undefined
   */
  generateQrcode(identifier: string): __Observable<null> {
    return this.generateQrcodeResponse(identifier).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module WelcomeToEspritv1qrcodeGenService {
}

export { WelcomeToEspritv1qrcodeGenService }
