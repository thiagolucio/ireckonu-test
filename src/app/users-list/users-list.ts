import { Url } from 'url';

export interface UsersList {
  photo: Url,
  localid: Number,
  first_name: String,
  last_name: String,
  gender: String,
  email: String,
  email2: String,
  prefix: String,
  suffix: String,
  loyalty_member_id: number,
  phone: Number,
  address: String,
  birthdate: Date,
  modified: Date,
  view: string 
}
