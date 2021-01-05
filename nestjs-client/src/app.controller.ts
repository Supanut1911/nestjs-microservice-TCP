import { Controller, Logger, Post, Body, Get, ForbiddenException } from '@nestjs/common';
import { exception } from 'console';
import { hostname } from 'os';
import { CoffeeDto } from './coffee.dto';
import { CoffeeService } from './coffee.service';
import { HeroDto } from './hero.dto';
import { HeroService } from './hero.service';
import { MathService } from './math.service';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(
    private mathService: MathService,
    private coffeeService: CoffeeService,
    private heroService: HeroService
  ) {}

  // Map the 'POST /add' route to this method
  @Post('add')
  // Define the logic to be executed
  async accumulate(@Body('data') data: number[])  {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.mathService.accumulate(data); // use math service to calc result & return
  }

  @Get('getmyHeros')
  async getHeros() {
    this.logger.log('getHero 222')
    return this.mathService.getHeros()
  }

  @Post('createHero')
  async createHero(
    @Body() heroDto: HeroDto
  ) {
    this.logger.log('heroDto:' + JSON.stringify(heroDto) )
    return this.mathService.createHero(heroDto)
  }

  @Get('getCoffees')
  async getCoffees() {
    this.logger.log('get coffeesss')
    return this.coffeeService.getCoffees()
  }

  @Post('createCoffee')
  async createCoffee(
    @Body() coffeeDto: CoffeeDto
  ) {
    this.logger.log('create coffeesss')
    return this.coffeeService.createCoffee(coffeeDto)
  }

  @Get('getHeros')
  async getHerosx() {
    return this.heroService.getHeros()
  }

  @Post('addHero')
  async addHero(
    @Body() heroDto: HeroDto
  ) {
      return await this.heroService.addHero(heroDto)
  }
}

