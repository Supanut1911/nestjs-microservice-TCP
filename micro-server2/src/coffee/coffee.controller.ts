import { Body, Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CoffeeDto } from './coffee.dto';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
    private logger = new Logger('CoffeeController')

    constructor(private coffeeService: CoffeeService) {}

    @MessagePattern('getmyCoffees')
    async getCoffess() {
        this.logger.log('getCoffees')
        return this.coffeeService.getCoffees()
    }

    @MessagePattern('createCoffee')
    async createCoffee(
        @Body() coffeeDto: CoffeeDto
    ) {
        this.logger.log('createCoffee')
        return this.coffeeService.createCoffee(coffeeDto)
    }
}
