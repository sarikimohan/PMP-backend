import UsersDao from '../daos/usersDao';
import { CRUD } from '../../common/interfaces/crudInterfaces'
import { CreateUserDto } from '../dto/createUserDto';
import { PutUserDto } from '../dto/putUserDto';
import { PatchUserDto } from '../dto/patchUserDto';

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