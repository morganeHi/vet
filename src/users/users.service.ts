import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly user : Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user';
    const user = this.user.create(createUserDto)
    user.password = await bcrypt.hash(user.password, 10)
    return this.user.save(user)
  }

  findAll() {
    //return `This action returns all users`;
    return '404'
  }

  findOne(id: number) {
    return this.user.find({
      relations: {own_id: true},
      where: {id}
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
