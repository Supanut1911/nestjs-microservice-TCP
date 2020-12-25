import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoffeeService } from './coffee.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CoffeeService],
})
export class AppModule {}
