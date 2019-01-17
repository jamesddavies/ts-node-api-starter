import { Request, Response } from 'express'
import Utilities from '../helpers/Utilities';

export default class IndexController {

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