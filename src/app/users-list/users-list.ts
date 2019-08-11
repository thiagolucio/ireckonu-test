import { Url } from 'url';

export interface UsersList {
  photo: Url,
  localid: Number,
  first_name: String,
  last_name: String,
  email: String,
  email2: String,
  prefix: String,
  loyalty_member_id: number,
  phone: Number,
  address: String,
  birthdate: Date,
  view: string 
}
