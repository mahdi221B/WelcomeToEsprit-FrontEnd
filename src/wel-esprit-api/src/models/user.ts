/* tslint:disable */
import { Address } from './address';
import { Picture } from './picture';
import { Role } from './role';
export interface User {
  active?: boolean;
  address?: Address;
  birthDate?: string;
  emailAddress?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  nci?: string;
  password?: string;
  picture?: Picture;
  roles?: Array<Role>;
}
