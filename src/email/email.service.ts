import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Email } from 'src/entity/Email';
import { Repository } from 'typeorm';
import { User } from 'src/entity/User';

@Injectable()
export class EmailService {
    constructor(
        @InjectRepository(Email) private emailRepository: Repository<Email>,
        @InjectRepository(User) private userRepository: Repository<User>
    ){}

    async getEmails(email: string): Promise<Email[]>{
        return await this.emailRepository.find({where:{to: email}})
    }

    async sendEmail(from: string, to: string, content: string): Promise<Email>{
        const user = await this.userRepository.findOne({where: {email: to}})
        if(user){
            const email = new Email()
            email.from = from
            email.to = to
            email.content = content
            return await this.emailRepository.save(email)
        }
        throw new BadRequestException()
    }
}
