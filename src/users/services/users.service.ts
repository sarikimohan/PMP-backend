import UsersDao from '../daos/usersDao.js';
import { CRUD } from '../../common/interfaces/crudInterfaces.js'
import { CreateUserDto } from '../dto/createUserDto.js';
import { PutUserDto } from '../dto/putUserDto.js';
import { PatchUserDto } from '../dto/patchUserDto.js';

class UsersService {
    async create(resource: CreateUserDto) {
        return UsersDao.addUser(resource);
    }

    async list(limit: number, page: number) {
        return UsersDao.getUsers();
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }

    async getUserByEmailWithPassword(email: string) {
        return UsersDao.getUserByEmailWithPassword(email);
    }
}

export default new UsersService();