import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { HeroDto } from './hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
    private logger = new Logger('HeroController')

    constructor(
        private heroService: HeroService
    ){}

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
