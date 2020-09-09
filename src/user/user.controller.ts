import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entity/User';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    create(
        @Body('name') name: string,
        @Body('email') email: string,
        @Body('password') password: string
    ): Promise<User>{
        return this.userService.create(name,email,password)
    }
}
