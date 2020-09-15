import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { User } from '../entity/User';
import { hash } from 'bcrypt'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async create(name: string, email:string, password: string): Promise<User>{
        if(!await this.userRepository.findOne({where:{email}})){
            const user = new User()
            user.name = name
            user.email = email
            user.password =  await hash(password,10)
            return await this.userRepository.save(user)
        }
        else{
            throw new ConflictException()
        }
    }
}
