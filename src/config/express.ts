import * as express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import * as bodyParser from 'body-parser'
import * as morgan from 'morgan'
import config from './config'
import winston, { morganOption } from './winston'

export default function() {
    var app: express.Express = express()

    //Logging
    app.use(morgan('combined', morganOption))

    //Body Parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    //Routes
    fs.readdirSync(config.routePath).forEach(file => {
        require(path.resolve(config.routePath, file)).default(app)
    })

    //404
    app.use((req: express.Request, res: express.Response, next): void => {
        winston.warn(`404 - Resource Not Found - ${req.originalUrl} - ${req.method} - ${req.ip}`)
        res.status(404).send(config.notFoundMessage)
    })

    //Error
    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
        winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)        
        res.status(err.status || 500).send(config.errorMessage)
    })

    return app
}