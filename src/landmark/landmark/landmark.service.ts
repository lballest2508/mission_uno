import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Landmark } from '../landmark.entity';
import { CreateLandmarkDto } from '../dto/create-landmark.dto/create-landmark.dto';
import { UpdateLandmarkDto } from '../dto/update-landmark.dto/update-landmark.dto';

@Injectable()
export class LandmarkService {
  constructor(
    @InjectRepository(Landmark)
    private readonly landmarkRepository: Repository<Landmark>,
  ) {}

  async findAll(): Promise<Landmark[]> {
    return this.landmarkRepository.find();
  }

  async create(createLandmarkDto: CreateLandmarkDto): Promise<Landmark> {
    const landmark = new Landmark();
    landmark.nombre = createLandmarkDto.nombre;
    landmark.direccion = createLandmarkDto.direccion;
    landmark.barrio = createLandmarkDto.barrio;
    return this.landmarkRepository.save(landmark);
  }

  async update(id: number, updateLandmarkDto: UpdateLandmarkDto): Promise<Landmark> {
    const landmark = await this.landmarkRepository.findOne({where: {id}});
    if (!landmark) {
      return null; // Or throw an exception
    }

    if (updateLandmarkDto.nombre) {
      landmark.nombre = updateLandmarkDto.nombre;
    }
    if (updateLandmarkDto.direccion) {
      landmark.direccion = updateLandmarkDto.direccion;
    }
    if (updateLandmarkDto.barrio) {
      landmark.barrio = updateLandmarkDto.barrio;
    }

    return this.landmarkRepository.save(landmark);
  }

  async remove(id: number): Promise<void> {
    await this.landmarkRepository.delete(id);
  }
}