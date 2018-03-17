import { Request, Response } from 'express'
import Utilities from './utilities.controller';

export default class IndexController extends Utilities {

    //GET functions

    public static handleGET = (req: Request, res: Response): void => {
        res.json({
            'message': 'get function'
        })
    }

    //POST functions

    public static handlePOST = (req: Request, res: Response): void => {
        res.json({
            'message': 'post function',
            'number': Utilities.generateNumber(req.body.min || 0, req.body.max || 10)
        })
    }
    
}