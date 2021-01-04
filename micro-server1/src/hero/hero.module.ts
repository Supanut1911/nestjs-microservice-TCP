import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../../config/typeorm.config';
import { HeroController } from './hero.controller';
import { HeroRepository } from './hero.repository';
import { HeroService } from './hero.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([HeroRepository])
  ],
  controllers: [HeroController],
  providers: [HeroService]
})
export class HeroModule {}
