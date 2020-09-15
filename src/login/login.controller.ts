import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('login')
export class LoginController {

    constructor(private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post()
    login(@Request() req): Promise<any>{
        return this.authService.login(req.user)
    }
}
