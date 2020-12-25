import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CoffeeDto } from './coffee.dto';
import { CoffeeService } from './coffee.service';


@Controller()
export class AppController {

  private logger = new Logger('AppController')

  constructor(private coffeeService: CoffeeService){}

  @MessagePattern('getmyCoffees')
  async getCoffess() {
    this.logger.log('getCoffees')
    return this.coffeeService.getCoffees()
  }

  @MessagePattern('createCoffee')
  async createCoffee(
    coffeedto: CoffeeDto
  ) {
    this.logger.log('createCoffee')
    return this.coffeeService.createCoffee(coffeedto)
  }

}
