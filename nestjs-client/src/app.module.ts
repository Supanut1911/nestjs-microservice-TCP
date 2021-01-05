import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee/coffee.service';
import { HeroService } from './hero/hero.service';
import { HeroController } from './hero/hero.controller';
import { CoffeeController } from './coffee/coffee.controller';

@Module({
  imports: [],
  controllers: [HeroController, CoffeeController],
  providers: [CoffeeService, HeroService],
})
export class AppModule {}
