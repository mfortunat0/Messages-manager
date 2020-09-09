import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entity/User';
import { Email } from './entity/Email';
import { EmailModule } from './email/email.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    username: 'root',
    password: 'root',
    database: 'test',
    host: 'localhost',
    type: 'postgres',
    port: 5432,
    entities: [User,Email],
    synchronize: true
  }),AuthModule, LoginModule, EmailModule, UserModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
