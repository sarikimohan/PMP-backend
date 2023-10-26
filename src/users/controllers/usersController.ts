// we import express to add types to the request/response objects from our controller functions
import express from 'express';

// we import our newly created user services
import usersService from '../services/users.service.js';

// we import the argon2 library for password hashing
import argon2 from 'argon2';

// we use debug with a custom context as described in Part 1
import debug from 'debug';

const log: debug.IDebugger = debug('usersController: ');
class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await usersService.list(100, 0);
        res.status(200).send(users);
    }


    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        var userId
        try{
            userId = await usersService.create(req.body);
            res.status(201).send({ id: userId });
        }catch(err){
            res.status(409).send("email already exsists")
        }
        
        
    }

    
    
}

export default new UsersController();