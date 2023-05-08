import { Injectable } from '@angular/core';
import {WelcomeToEspritv1authService} from "../../../../wel-esprit-api/src/services/welcome-to-espritv-1auth.service";
import {
  WelcomeToEspritv1accountRegistrationService
} from "../../../../wel-esprit-api/src/services/welcome-to-espritv-1account-registration.service";
import {Router} from "@angular/router";
import {User} from "../../../../wel-esprit-api/src/models/user";
import {Observable} from "rxjs";
import {AuthenticationRequest} from "../../../../wel-esprit-api/src/models/authentication-request";
import {AuthentificationResponse} from "../../../../wel-esprit-api/src/models/authentification-response";
import {WelcomeToEspritv1usersService} from "../../../../wel-esprit-api/src/services/welcome-to-espritv-1users.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authService:WelcomeToEspritv1authService,
    private registerService:WelcomeToEspritv1accountRegistrationService,
    private router:Router,
    private userService:WelcomeToEspritv1usersService
  ) { }

    findAllUsers():Observable<Array<User>>{
    return this.userService.retrieveAllUsers();
    }
  inscrption(user:User):Observable<User>{
    return this.registerService.save(user);
  }


  deleteUSer(id:number):Observable<any>{
    return this.userService.deleteUser(id);
  }
  modifyUser(user:User):Observable<User>{
    return this.userService.updateUser(user);
  }
  findUserById(id:number):Observable<User>{
    return this.userService.retrieveUserById(id);
  }
  login(authRequest:AuthenticationRequest):Observable<AuthentificationResponse>{
    return  this.authService.authenticate(authRequest);
  }

  setUserConnected(authResponse:AuthentificationResponse):void{
    localStorage.setItem('accessToken',JSON.stringify(authResponse.accessToken))
  }
  setUserConnecterAuthorities(authResponse:AuthentificationResponse):void{
    localStorage.setItem('authorities',JSON.stringify(authResponse.roles))
  }

  isUserLoggedAndTokenValid():boolean{

    if (localStorage.getItem('accessToken')){
      return true;
    }
    return false
  }
}
