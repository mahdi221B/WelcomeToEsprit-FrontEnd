/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Role } from '../models/role';
@Injectable({
  providedIn: 'root',
})
class WelcomeToEspritv1rolesService extends __BaseService {
  static readonly retrieveAllRolesPath = '/WelcomeToEsprit/v1/roles/all';
  static readonly retrieveAllRolesByUserFullNamePath = '/WelcomeToEsprit/v1/roles/byUser/{firstname}/{lastname}';
  static readonly addRolePath = '/WelcomeToEsprit/v1/roles/create';
  static readonly deleteRolePath = '/WelcomeToEsprit/v1/roles/deleteRole/{idRole}';
  static readonly retrieveRoleByRoleNamePath = '/WelcomeToEsprit/v1/roles/retrieveByName/{roleName}';
  static readonly updateRolePath = '/WelcomeToEsprit/v1/roles/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la listes des roles
   *
   * Cette methode permet de renvoyer la liste des roles qui existent dans BDD
   * @return La liste des roles / une liste vide
   */
  retrieveAllRolesResponse(): __Observable<__StrictHttpResponse<Array<Role>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/roles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Role>>;
      })
    );
  }
  /**
   * Renvoi la listes des roles
   *
   * Cette methode permet de renvoyer la liste des roles qui existent dans BDD
   * @return La liste des roles / une liste vide
   */
  retrieveAllRoles(): __Observable<Array<Role>> {
    return this.retrieveAllRolesResponse().pipe(
      __map(_r => _r.body as Array<Role>)
    );
  }

  /**
   * Renvoi la listes des roles
   *
   * Cette methode permet de renvoyer la liste des roles d'un user par son nom et prénom
   * @param params The `WelcomeToEspritv1rolesService.RetrieveAllRolesByUserFullNameParams` containing the following parameters:
   *
   * - `lastname`:
   *
   * - `firstname`:
   *
   * @return La liste des roles / une liste vide
   */
  retrieveAllRolesByUserFullNameResponse(params: WelcomeToEspritv1rolesService.RetrieveAllRolesByUserFullNameParams): __Observable<__StrictHttpResponse<Array<Role>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/roles/byUser/${encodeURIComponent(String(params.firstname))}/${encodeURIComponent(String(params.lastname))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Role>>;
      })
    );
  }
  /**
   * Renvoi la listes des roles
   *
   * Cette methode permet de renvoyer la liste des roles d'un user par son nom et prénom
   * @param params The `WelcomeToEspritv1rolesService.RetrieveAllRolesByUserFullNameParams` containing the following parameters:
   *
   * - `lastname`:
   *
   * - `firstname`:
   *
   * @return La liste des roles / une liste vide
   */
  retrieveAllRolesByUserFullName(params: WelcomeToEspritv1rolesService.RetrieveAllRolesByUserFullNameParams): __Observable<Array<Role>> {
    return this.retrieveAllRolesByUserFullNameResponse(params).pipe(
      __map(_r => _r.body as Array<Role>)
    );
  }

  /**
   * Enregistrer un nouveau role
   *
   * Cette methode permet d'enregistrer  un role
   * @param body undefined
   * @return L'objet role est crée / modifié
   */
  addRoleResponse(body?: Role): __Observable<__StrictHttpResponse<Role>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/WelcomeToEsprit/v1/roles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Role>;
      })
    );
  }
  /**
   * Enregistrer un nouveau role
   *
   * Cette methode permet d'enregistrer  un role
   * @param body undefined
   * @return L'objet role est crée / modifié
   */
  addRole(body?: Role): __Observable<Role> {
    return this.addRoleResponse(body).pipe(
      __map(_r => _r.body as Role)
    );
  }

  /**
   * supprimer un role
   *
   * Cette methode permet de supprimer un role par son ID
   * @param idRole undefined
   * @return Le role  a été supprimé
   */
  deleteRoleResponse(idRole: number): __Observable<__StrictHttpResponse<Role>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/WelcomeToEsprit/v1/roles/deleteRole/${encodeURIComponent(String(idRole))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Role>;
      })
    );
  }
  /**
   * supprimer un role
   *
   * Cette methode permet de supprimer un role par son ID
   * @param idRole undefined
   * @return Le role  a été supprimé
   */
  deleteRole(idRole: number): __Observable<Role> {
    return this.deleteRoleResponse(idRole).pipe(
      __map(_r => _r.body as Role)
    );
  }

  /**
   * Rechercher un role
   *
   * Cette methode permet de rechercher un user par son nom
   * @param roleName undefined
   * @return Le role  a été trouvé
   */
  retrieveRoleByRoleNameResponse(roleName: string): __Observable<__StrictHttpResponse<Role>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/WelcomeToEsprit/v1/roles/retrieveByName/${encodeURIComponent(String(roleName))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Role>;
      })
    );
  }
  /**
   * Rechercher un role
   *
   * Cette methode permet de rechercher un user par son nom
   * @param roleName undefined
   * @return Le role  a été trouvé
   */
  retrieveRoleByRoleName(roleName: string): __Observable<Role> {
    return this.retrieveRoleByRoleNameResponse(roleName).pipe(
      __map(_r => _r.body as Role)
    );
  }

  /**
   * Modifier un nouveau role
   *
   * Cette methode permet de modifier  un role
   * @param body undefined
   * @return L'objet role est crée / modifié
   */
  updateRoleResponse(body?: Role): __Observable<__StrictHttpResponse<Role>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/WelcomeToEsprit/v1/roles/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Role>;
      })
    );
  }
  /**
   * Modifier un nouveau role
   *
   * Cette methode permet de modifier  un role
   * @param body undefined
   * @return L'objet role est crée / modifié
   */
  updateRole(body?: Role): __Observable<Role> {
    return this.updateRoleResponse(body).pipe(
      __map(_r => _r.body as Role)
    );
  }
}

module WelcomeToEspritv1rolesService {

  /**
   * Parameters for retrieveAllRolesByUserFullName
   */
  export interface RetrieveAllRolesByUserFullNameParams {
    lastname: string;
    firstname: string;
  }
}

export { WelcomeToEspritv1rolesService }
