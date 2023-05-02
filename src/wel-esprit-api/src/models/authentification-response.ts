/* tslint:disable */
import { SimpleGrantedAuthority } from './simple-granted-authority';
export interface AuthentificationResponse {
  accessToken?: string;
  roles?: Array<SimpleGrantedAuthority>;
}
