import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';
import { HeroDto } from './hero.dto';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private mathService: MathService) {}

  // Define the message pattern for this method
  @MessagePattern({cmd:'add' })
  // Define the logic to be executed
  async accumulate(data: number[])  {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(data); // use math service to calc result & return
  }

  @MessagePattern('getmyHeros')
  async getHeros() {
    this.logger.log('getHeros')
    return this.mathService.getHeros()
  }

  @MessagePattern('createHero')
  async create(data: HeroDto) {
    this.logger.log('server: CreateHero')
    return this.mathService.createHero(data)
  }
}
