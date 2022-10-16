import { Injectable } from '@nestjs/common';
import { Owner } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateOwnerDto } from './dto/owners.dto';

@Injectable()
export class OwnersService {
    constructor(
        @InjectRepository(Owner) private readonly ownerRepository: Repository<Owner>
    ){}

    createOwner(createOwnerDto: CreateOwnerDto) {
        const newOwner = this.ownerRepository.create(createOwnerDto);
        return this.ownerRepository.save(newOwner);
    }

    /*findOwnersById(id: number) {
        return this.ownerRepository.findOne(id);
    }*/

    getOwners(){
        return this.ownerRepository.find();
    }
    
}
