export interface UserCobList {
    items: UserListTable[];
    total_count: number;
}


export interface UserListTable {
    photo: String,
    localid: Number,
    first_name: String,
    last_name: String,
    email: String,
    email2: String,
    prefix: String,
    loyalty_member_id: number,
    phone: Number,
    address: String,
    birthdate: Date 
  }