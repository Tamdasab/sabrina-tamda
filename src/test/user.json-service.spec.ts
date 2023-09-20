import fs from 'fs';
import { UserJSONService } from '../user/user.json-service';
import { User } from '../user/user';

jest.mock('fs');
const fsMock = fs as jest.Mocked<typeof fs>;

describe('UserJSONService' , () => {
    let sut: UserJSONService;

    beforeEach
})