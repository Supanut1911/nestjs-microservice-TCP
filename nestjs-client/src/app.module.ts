import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoffeeService } from './coffee.service';
import { HeroService } from './hero.service';
import { MathService } from './math.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MathService, CoffeeService, HeroService],
})
export class AppModule {}
