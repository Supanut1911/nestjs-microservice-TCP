import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { HeroDto } from "./hero.dto";

@Injectable()
export class HeroService {
    private client: ClientProxy

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8877
            }
        })
    }

    getHeros() {
        console.log('call get');
        return this.client.send('getHeros', '')
    }

    addHero(
        heroDto: HeroDto
    ) {
        console.log('call add');
        
        let result =  this.client.send('addHero', heroDto)
        return  result
    }  
}