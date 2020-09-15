import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Controller('login')
export class LoginController {

    constructor(private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post()
    login(@Request() req): Promise<any>{
        return this.authService.login(req.user)
    }
}
