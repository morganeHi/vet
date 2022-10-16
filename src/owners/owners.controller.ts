import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CreateOwnerDto } from './dto/owners.dto';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {
    constructor(private readonly OwnerService: OwnersService) {}

    @Get()
    getOwners() {
        return this.OwnerService.getOwners();
    }

    @Post()
    @UsePipes(ValidationPipe)
    postOwner(@Body() CreateOwnerDto: CreateOwnerDto) {
        return this.OwnerService.createOwner(CreateOwnerDto)
    }
}
