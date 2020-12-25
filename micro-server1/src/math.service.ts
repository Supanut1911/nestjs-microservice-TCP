import { Injectable } from '@nestjs/common';
import { HeroDto } from './hero.dto';

let heros = [
    {
      name: "batman",
      power: 999
    }
  ]


@Injectable()
export class MathService {
    public accumulate(data: number[]): number {
        return (data || []).reduce((a, b) => Number(a) + Number(b));
    }

    public getHeros() {
        return heros
    }

    public createHero(data: HeroDto) {
        let { name, power } = data
        let hero = {
            name,
            power
        }

        heros.push(hero)
        console.log('add success', heros);
        
    }
}

