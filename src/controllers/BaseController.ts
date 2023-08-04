import { Request, Response } from 'express'

export class BaseController<T> {
    public async index(req: Request, res: Response): Promise<Response<T[]>> {
        return res.json()
    }

    public async create(req: Request, res: Response): Promise<Response<T>> {
        return res.json()
    }

    public async update(req: Request, res: Response): Promise<Response<T>> {
        return res.json()
    }

    public async delete(req: Request, res: Response): Promise<Response<T>> {
        return res.json()
    }
}
