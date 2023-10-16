import UsersDao from '../daos/users.dao';
import { CRUD } from '../../common/interfaces/crud.interfaces'
import { CreateUserDto } from '../dto/create.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';

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