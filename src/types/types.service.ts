import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from 'src/entities/type.entity';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>
  ){}

  create(createTypeDto: CreateTypeDto) {
    const type = this.typeRepository.create(createTypeDto);
    return this.typeRepository.save(type);
    //return 'This action adds a new type';
  }

  findAll() {
    return `This action returns all types`;
  }

  findOne(id: number) {
    return `This action returns a #${id} type`;
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return `This action updates a #${id} type`;
  }

  remove(id: number) {
    return `This action removes a #${id} type`;
  }
}
