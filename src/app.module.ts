import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { OwnersModule } from './owners/owners.module';
import { UsersModule } from './users/users.module';
import { TypesModule } from './types/types.module';
import { PetsModule } from './pets/pets.module';



@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: <number>configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    OwnersModule,
    UsersModule,
    TypesModule,
    PetsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
