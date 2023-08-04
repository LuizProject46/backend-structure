import { Request, Response } from 'express'
import { ICar } from '../interfaces/car.interface'
import { BaseController } from './BaseController'
import { BhutService } from '../services/bhut'

class CarController extends BaseController<ICar> {
    private bhutService: BhutService

    public constructor(bhutService: BhutService) {
        super()

        this.bhutService = bhutService
    }

    public async index(req: Request, res: Response): Promise<Response<ICar[]>> {
        const cars = await this.bhutService.getCars()

        return res.json(cars)
    }
}

export default new CarController()
