import { User } from "./user";

export interface Userservice {
    add( username:string ):User;
    getById(id:number):User | null;
}