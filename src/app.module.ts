import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LandmarkModule } from './landmark/landmark.module';
import config from '../typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule, 
    UserModule, 
    LandmarkModule,
    TypeOrmModule.forRoot(config)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}