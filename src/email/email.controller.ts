import { Controller, Get, Request, UseGuards, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { Email } from 'src/entity/Email';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('email')
export class EmailController {
    constructor(private emailService: EmailService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    getEmails(@Request() req): Promise<Email[]>{
        return this.emailService.getEmails(req.user.email)
    }

    @UseGuards(JwtAuthGuard)
    @Post('send')
    sendEmail(
        @Request() req,
        @Body('to') to:string,
        @Body('content') content: string
    ): Promise<Email>{
        return this.emailService.sendEmail(req.user.email,to,content)
    }
}
