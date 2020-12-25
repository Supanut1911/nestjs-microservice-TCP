import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { HeroDto } from './hero.dto';

@Injectable()
export class MathService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }

  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }

  public getHeros() {
    return this.client.send('getmyHeros', '')
  }

  public createHero(data: HeroDto) {
    return this.client.send('createHero', data)
  }
}
