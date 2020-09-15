import { Controller, Post, Body, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/User';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

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

    @UseGuards(JwtAuthGuard)
    @Delete()
    destroy(@Request() req): Promise<DeleteResult>{
        return this.userService.destroy(req.user.id)
    }
}
