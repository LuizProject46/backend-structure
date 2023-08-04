import express, { Response } from 'express'
import dotenv from 'dotenv'
import { router } from './routes/routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

dotenv.config()

app.get('/api', (_, res: Response) => {
    return res.json({
        message: 'Welcome',
    })
})

app.use('/api', router)

app.listen(process.env.API_PORT, () => {
    console.log('Server is running....')
})
