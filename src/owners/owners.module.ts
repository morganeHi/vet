import { Module } from '@nestjs/common';
import { Owner } from 'src/entities';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  controllers: [OwnersController],
  providers: [OwnersService]
})
export class OwnersModule {}
