import { User } from './user';
import { Userservice } from './user-service';

export class UserJSONService implements Userservice {
    add(username: string): User {
        throw new Error('Method not implemented.');
    }

    getById(id: number): User{
        throw new Error('Method not implemented.');
    }
}
