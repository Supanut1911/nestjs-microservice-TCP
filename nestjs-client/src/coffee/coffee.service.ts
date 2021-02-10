import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { CoffeeDto } from "./coffee.dto";

@Injectable()
export class CoffeeService {
    private client: ClientProxy

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8899
            }
        })
    }

    public  getCoffees() {
        let res =  this.client.send('getmyCoffees', '')
        res.subscribe(r => {
            console.log(r);
            
        })
        
        return res
        // return this.client.send('getmyCoffees', '')
    }

    public createCoffee(data: CoffeeDto) {
        return this.client.send('createCoffee', data)
    }

}