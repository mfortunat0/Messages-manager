import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from 'src/entity/Email';
import { User } from 'src/entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([Email,User])],
  controllers: [EmailController],
  providers: [EmailService]
})
export class EmailModule {}
