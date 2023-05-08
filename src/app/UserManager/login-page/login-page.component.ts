import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user/user.service";
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../../wel-esprit-api/src/models/authentication-request";

class AuthenticationResponse {
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  authRequest: AuthenticationRequest={};
  //authResponse!: AuthenticationResponse;
  errorMessage='';
  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    let roles:any;
    this.userService.login(this.authRequest)
      .subscribe(
        (data)=>{
          this.userService.setUserConnected(data)
          this.userService.setUserConnecterAuthorities(data)
          // @ts-ignore
          for (let i of data.roles){
            if (i.authority=='Administrateur'){
              roles=i.authority;
            }
          }
          if (roles==null){
            this.router.navigate(['simplePage'])
          }
          this.router.navigate(['home'])
        },
        error=>{
          console.log(error);
          this.errorMessage='Login or password invalid!';
        }
      );
  }

}
