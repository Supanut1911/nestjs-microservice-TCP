import { Injectable } from "@nestjs/common";
import { CoffeeDto } from "./coffee.dto";

let coffees = [
    {
        name: "Mocha",
        price: 55
    }
]

@Injectable()
export class CoffeeService {
    public getCoffees() {
        return coffees
    }

    public createCoffee(
        coffeedto: CoffeeDto
    ) {
        let {name, price} = coffeedto

        let coffee = {
            name,
            price
        }

        coffees.push(coffee)
    }
}