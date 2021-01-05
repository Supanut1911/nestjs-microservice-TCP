import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { HeroDto } from './hero.dto';
import { Hero } from './hero.entity';
import { HeroRepository } from './hero.repository';

@Injectable()
export class HeroService {
    constructor(private heroRepository: HeroRepository){}


    async getHeros() {
        return await this.heroRepository.find()
    }

    async addHero(
        heroDto: HeroDto
    ){
        let { name, position, power } = heroDto

        let hero = new Hero()
        hero.name = name
        hero.position = position
        hero.power = power

        try {
            await hero.save()
            return {
                message: 'add hero success'
            }
        } catch (error) {
            throw new RpcException('add hero fail')
        }
    }
}
