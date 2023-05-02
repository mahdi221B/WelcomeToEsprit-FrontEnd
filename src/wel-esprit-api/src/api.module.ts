/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { WelcomeToEspritv1accountRegistrationService } from './services/welcome-to-espritv-1account-registration.service';
import { WelcomeToEspritv1authService } from './services/welcome-to-espritv-1auth.service';
import { WelcomeToEspritv1picturesService } from './services/welcome-to-espritv-1pictures.service';
import { WelcomeToEspritv1qrcodeGenService } from './services/welcome-to-espritv-1qrcode-gen.service';
import { WelcomeToEspritv1rolesService } from './services/welcome-to-espritv-1roles.service';
import { WelcomeToEspritv1usersService } from './services/welcome-to-espritv-1users.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    WelcomeToEspritv1accountRegistrationService,
    WelcomeToEspritv1authService,
    WelcomeToEspritv1picturesService,
    WelcomeToEspritv1qrcodeGenService,
    WelcomeToEspritv1rolesService,
    WelcomeToEspritv1usersService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
