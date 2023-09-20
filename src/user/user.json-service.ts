import { User } from './user';
import { Userservice } from './user-service';
import fs from 'fs';

export class UserJSONService implements Userservice {
    

    add(username: string): User {
        const data = fs.readFileSync('./src/data/data.json', 'utf8');
        const users: User[] = JSON.parse(data);
        const newUser: User = {
            id: users.length + 1,
            username
        };

        users.push(newUser);

        fs.writeFileSync('./src/data/data.json', JSON.stringify(users));

        return newUser;
    }

    getById(id: number): User | null{
        const users: User[] = this.getUsersFormJSON();
        const user = users.find((u) => u.id === id);

        if (!user) {
            return null;
        }

        return user;
    }


    
    private getUsersFormJSON(){
        try{
            const data = fs.readFileSync('./src/data/data.json', 'utf8');

            return JSON.parse(data) as User[];
            
        } catch(error) {
            console.error('Error ', error);
            return [];
        };
    };



}
