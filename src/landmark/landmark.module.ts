import { Module } from '@nestjs/common';
import { LandmarkService } from './landmark/landmark.service';
import { LandmarkController } from './landmark/landmark.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landmark } from './landmark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Landmark])],
  providers: [LandmarkService],
  controllers: [LandmarkController],
})
export class LandmarkModule {}
