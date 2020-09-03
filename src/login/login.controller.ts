import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller('login')
export class LoginController {

    constructor(private authService: AuthService){}

    @ApiTags('Login')
    @ApiBearerAuth()
    @UseGuards(LocalAuthGuard)
    @Post()
    login(@Request() req): Promise<any>{
        return this.authService.login(req.user)
    }
}
