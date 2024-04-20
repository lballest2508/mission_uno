import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { LandmarkService } from './landmark.service';
import { CreateLandmarkDto } from '../dto/create-landmark.dto/create-landmark.dto';
import { UpdateLandmarkDto } from '../dto/update-landmark.dto/update-landmark.dto';
import { JwtAuthGuard } from 'src/auth/guards/local-auth/jwt-auth.guard';

@Controller('landmarks')
export class LandmarkController {
  constructor(private readonly landmarkService: LandmarkService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.landmarkService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createLandmarkDto: CreateLandmarkDto) {
    return this.landmarkService.create(createLandmarkDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLandmarkDto: UpdateLandmarkDto) {
    return this.landmarkService.update(+id, updateLandmarkDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landmarkService.remove(+id);
  }
}