import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "./entities/user.entity";

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,) {}

    async findOne(username: string): Promise<User | null> {
        return await this.usersRepository.findOne({where: {firstName: username} });
    }
}
