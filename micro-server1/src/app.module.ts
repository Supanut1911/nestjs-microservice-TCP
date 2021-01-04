import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { AppController } from './app.controller';
import { MathService } from './math.service';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HeroModule
  ],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
