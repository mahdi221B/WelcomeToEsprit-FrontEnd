/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
import { ChangePasswordEntity } from '../models/change-password-entity';
@Injectable({
  providedIn: 'root',
})
class WelcomeToEspritv1usersService extends __BaseService {
  static readonly retrieveAllUsersPath = '/WelcomeToEsprit/v1/users/all';
  static readonly assignRoleToUserPath = '/WelcomeToEsprit/v1/users/assignRole/{idRole}/{idUser}';
  static readonly retrieveAllUsersByRoleNamePath = '/WelcomeToEsprit/v1/users/byRoleName/{roleName}';
  static readonly changePasswordPath = '/WelcomeToEsprit/v1/users/changePassword';
  static readonly addUserPath = '/WelcomeToEsprit/v1/users/create';
  static readonly deleteUserPath = '/WelcomeToEsprit/v1/users/delete/{idUser}';
  static readonly retrieveUserByIdPath = '/WelcomeToEsprit/v1/users/research/{idUser}';
  static readonly retrieveUserByFullNamePath = '/WelcomeToEsprit/v1/users/retrieveByFullName/{firstname}/{lastname}';
  static readonly updateUserPath = '/WelcomeToEsprit/v1/users/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la listes des users
   *
   * Cette methode permet de renvoyer la liste des users qui existent dans BDD
   * @return La liste des users / une liste vide
   */
  retrieveAllUsersResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/users/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * Renvoi la listes des users
   *
   * Cette methode permet de renvoyer la liste des users qui existent dans BDD
   * @return La liste des users / une liste vide
   */
  retrieveAllUsers(): __Observable<Array<User>> {
    return this.retrieveAllUsersResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * assigner un rôle à un user
   *
   * Cette methode permet d'assigner un role à un user
   * @param params The `WelcomeToEspritv1usersService.AssignRoleToUserParams` containing the following parameters:
   *
   * - `idUser`:
   *
   * - `idRole`:
   *
   * @return le role a été assigner à l'utilisateur avec succès
   */
  assignRoleToUserResponse(params: WelcomeToEspritv1usersService.AssignRoleToUserParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/WelcomeToEsprit/v1/users/assignRole/${encodeURIComponent(String(params.idRole))}/${encodeURIComponent(String(params.idUser))}`,
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
   * assigner un rôle à un user
   *
   * Cette methode permet d'assigner un role à un user
   * @param params The `WelcomeToEspritv1usersService.AssignRoleToUserParams` containing the following parameters:
   *
   * - `idUser`:
   *
   * - `idRole`:
   *
   * @return le role a été assigner à l'utilisateur avec succès
   */
  assignRoleToUser(params: WelcomeToEspritv1usersService.AssignRoleToUserParams): __Observable<User> {
    return this.assignRoleToUserResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Rechercher des users par le nom de leur rôle
   *
   * Cette methode permet de rechercher des users par leur role
   * @param roleName undefined
   * @return La liste des users / une liste vide
   */
  retrieveAllUsersByRoleNameResponse(roleName: string): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/users/byRoleName/${encodeURIComponent(String(roleName))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * Rechercher des users par le nom de leur rôle
   *
   * Cette methode permet de rechercher des users par leur role
   * @param roleName undefined
   * @return La liste des users / une liste vide
   */
  retrieveAllUsersByRoleName(roleName: string): __Observable<Array<User>> {
    return this.retrieveAllUsersByRoleNameResponse(roleName).pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * Modifier le password d'un user
   *
   * Cette methode permet de modifier le password d'un user
   * @param body undefined
   * @return Le password a été modifié
   */
  changePasswordResponse(body?: ChangePasswordEntity): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/WelcomeToEsprit/v1/users/changePassword`,
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
   * Modifier le password d'un user
   *
   * Cette methode permet de modifier le password d'un user
   * @param body undefined
   * @return Le password a été modifié
   */
  changePassword(body?: ChangePasswordEntity): __Observable<User> {
    return this.changePasswordResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Enregistrer un nouveau user
   *
   * Cette methode permet d'enregistrer  un user
   * @param body undefined
   * @return L'objet user est crée / modifié
   */
  addUserResponse(body?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/WelcomeToEsprit/v1/users/create`,
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
  addUser(body?: User): __Observable<User> {
    return this.addUserResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * supprimer un user
   *
   * Cette methode permet de supprimer un user par son ID
   * @param idUser undefined
   * @return L'utilisateur  a été supprimé
   */
  deleteUserResponse(idUser: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/WelcomeToEsprit/v1/users/delete/${encodeURIComponent(String(idUser))}`,
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
   * supprimer un user
   *
   * Cette methode permet de supprimer un user par son ID
   * @param idUser undefined
   * @return L'utilisateur  a été supprimé
   */
  deleteUser(idUser: number): __Observable<User> {
    return this.deleteUserResponse(idUser).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Rechercher un user
   *
   * Cette methode permet de rechercher un user par son id
   * @param idUser undefined
   * @return L'utilisateur  a été trouvé
   */
  retrieveUserByIdResponse(idUser: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/users/research/${encodeURIComponent(String(idUser))}`,
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
   * Rechercher un user
   *
   * Cette methode permet de rechercher un user par son id
   * @param idUser undefined
   * @return L'utilisateur  a été trouvé
   */
  retrieveUserById(idUser: number): __Observable<User> {
    return this.retrieveUserByIdResponse(idUser).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Rechercher un user
   *
   * Cette methode permet de rechercher un user par son fullName
   * @param params The `WelcomeToEspritv1usersService.RetrieveUserByFullNameParams` containing the following parameters:
   *
   * - `lastname`:
   *
   * - `firstname`:
   *
   * @return L'utilisateur  a été trouvé
   */
  retrieveUserByFullNameResponse(params: WelcomeToEspritv1usersService.RetrieveUserByFullNameParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/users/retrieveByFullName/${encodeURIComponent(String(params.firstname))}/${encodeURIComponent(String(params.lastname))}`,
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
   * Rechercher un user
   *
   * Cette methode permet de rechercher un user par son fullName
   * @param params The `WelcomeToEspritv1usersService.RetrieveUserByFullNameParams` containing the following parameters:
   *
   * - `lastname`:
   *
   * - `firstname`:
   *
   * @return L'utilisateur  a été trouvé
   */
  retrieveUserByFullName(params: WelcomeToEspritv1usersService.RetrieveUserByFullNameParams): __Observable<User> {
    return this.retrieveUserByFullNameResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Modifier un nouveau user
   *
   * Cette methode permet de modifier  un user
   * @param body undefined
   * @return L'objet user est crée / modifié
   */
  updateUserResponse(body?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/WelcomeToEsprit/v1/users/update`,
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
   * Modifier un nouveau user
   *
   * Cette methode permet de modifier  un user
   * @param body undefined
   * @return L'objet user est crée / modifié
   */
  updateUser(body?: User): __Observable<User> {
    return this.updateUserResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module WelcomeToEspritv1usersService {

  /**
   * Parameters for assignRoleToUser
   */
  export interface AssignRoleToUserParams {
    idUser: number;
    idRole: number;
  }

  /**
   * Parameters for retrieveUserByFullName
   */
  export interface RetrieveUserByFullNameParams {
    lastname: string;
    firstname: string;
  }
}

export { WelcomeToEspritv1usersService }
