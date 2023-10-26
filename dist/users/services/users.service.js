import UsersDao from '../daos/usersDao.js';
class UsersService {
    async create(resource) {
        return UsersDao.addUser(resource);
    }
    async list(limit, page) {
        return UsersDao.getUsers();
    }
    async getUserByEmail(email) {
        return UsersDao.getUserByEmail(email);
    }
    async getUserByEmailWithPassword(email) {
        return UsersDao.getUserByEmailWithPassword(email);
    }
}
export default new UsersService();
