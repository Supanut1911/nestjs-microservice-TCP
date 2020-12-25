import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoffeeService } from './coffee.service';
import { MathService } from './math.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MathService, CoffeeService],
})
export class AppModule {}
