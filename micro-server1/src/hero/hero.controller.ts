import { Body, Controller, Logger, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ExceptionFilter } from '../../rpc-exception/rpc-exception.filter';
import { HeroDto } from './hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
    private logger = new Logger('HeroController')

    constructor(private heroservice: HeroService){}

    @MessagePattern('getHeros')
    async getHeros() {
        this.logger.log("gethero call")
        return this.heroservice.getHeros()
    }

    @UseFilters(new ExceptionFilter())
    @MessagePattern('addHero')
    @UsePipes(ValidationPipe)
    async addHero(
        @Body() heroDto: HeroDto
    ) {
        console.log('called add');
        return this.heroservice.addHero(heroDto)
    }
}
