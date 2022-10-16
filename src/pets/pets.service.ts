import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/entities';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petRepository: Repository<Pet>
  ){}

  create(createPetDto: CreatePetDto) {
    const pet = this.petRepository.create(createPetDto);
    return this.petRepository.save(pet);
  }

  findAll() {
    return this.petRepository.find();
  }

  findOne(id: number) {
    return this.petRepository.find({
      relations: {own_id: true, type_id: true},
      where: {id}
    })
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
