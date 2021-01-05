import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HeroModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
