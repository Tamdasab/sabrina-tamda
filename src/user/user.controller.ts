import { error } from 'console';
import { User } from './user';
import { Userservice } from './user-service';

export class UserController {
    constructor(private userService: Userservice) {}

    add(username: string): User  {
        if (!username) {
            throw new Error("Le nom d'utilisateur ne peut pas être vide.");
        }

        if (username.trim() === '') {
            throw new Error("Le nom d'utilisateur ne peut pas être composé uniquement d'espaces.");
        }
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (isNaN(id)) {
            throw new Error("L'ID doit être un nombre décimal.");
        }

        if (id < 0) {
            throw new Error("L'ID ne peut pas être un nombre négatif.");
        }
        return this.userService.getById(id);
    }
}
