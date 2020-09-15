import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/User';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService
    ){}

    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.userRepository.findOne({where:{email}})
        if(user && await compare(password,user.password)){
            const { password, ...result } = user
            return result
        }
        return null
    }

    async login(user: any): Promise<any>{
        const payload = { email: user.email, id: user.id }
        return{
            acess_token: this.jwtService.sign(payload)
        }
    }
}
