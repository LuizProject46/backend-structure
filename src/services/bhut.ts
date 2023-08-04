import { ICar } from '../interfaces/car.interface'
import { IBhut } from '../interfaces/contracts/bhut.interface'
import axios from 'axios'

export class BhutService implements IBhut {
    private baseURL: string

    public constructor() {
        this.baseURL = process.env.BHUT_API_ADDRESS || ''
    }

    public async getCars(): Promise<ICar[]> {
        const response = await axios.get(this.baseURL)

        return response.data
    }

    public async createCar(car: ICar): Promise<ICar> {
        const response = await axios.post(this.baseURL, {
            car,
        })

        return response.data
    }
}
