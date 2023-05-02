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
class WelcomeToEspritv1picturesService extends __BaseService {
  static readonly uploadPicturePath = '/WelcomeToEsprit/v1/pictures/upload/{idUser}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Ajouter une photo à un user
   *
   * Cette methode permet d'ajouter une photo à un user par son ID
   * @param params The `WelcomeToEspritv1picturesService.UploadPictureParams` containing the following parameters:
   *
   * - `idUser`:
   *
   * - `file`:
   *
   * @return L'utilisateur  a désormais une photo
   */
  uploadPictureResponse(params: WelcomeToEspritv1picturesService.UploadPictureParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.file != null) __params = __params.set('file', params.file.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/WelcomeToEsprit/v1/pictures/upload/${encodeURIComponent(String(params.idUser))}`,
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
   * Ajouter une photo à un user
   *
   * Cette methode permet d'ajouter une photo à un user par son ID
   * @param params The `WelcomeToEspritv1picturesService.UploadPictureParams` containing the following parameters:
   *
   * - `idUser`:
   *
   * - `file`:
   *
   * @return L'utilisateur  a désormais une photo
   */
  uploadPicture(params: WelcomeToEspritv1picturesService.UploadPictureParams): __Observable<string> {
    return this.uploadPictureResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module WelcomeToEspritv1picturesService {

  /**
   * Parameters for uploadPicture
   */
  export interface UploadPictureParams {
    idUser: number;
    file: any;
  }
}

export { WelcomeToEspritv1picturesService }
