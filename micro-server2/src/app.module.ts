import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee/coffee.service';
import { CoffeeController } from './coffee/coffee.controller';

@Module({
  imports: [],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class AppModule {}
