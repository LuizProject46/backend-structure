import { ICar } from '../car.interface'

export interface IBhut {
    getCars(): Promise<ICar[]>
    createCar(car: ICar): Promise<ICar>
}
