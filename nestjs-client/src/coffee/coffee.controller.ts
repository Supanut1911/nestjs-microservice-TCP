import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CoffeeDto } from './coffee.dto';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
    private logger = new Logger('CoffeeController')

    constructor(
        private coffeeService: CoffeeService
    ) {}

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
}
