import { Router } from 'express'
import { BhutService } from '../services/bhut'
import { CarController } from '../controllers/CarController'

export const router = Router()

/* GET ROUTES */
router.get('listCars', (req, res) =>
    new CarController(new BhutService()).index(req, res)
)

//router.get('logs', (req: Request, res: Response) => {})

/* POST ROUTES */
//router.post('createCar', new CarController*)
