import * as path from 'path'

export default class Config {
    public static port: number = 3000
    public static routePath: string = path.resolve(__dirname, '../routes')

    public static notFoundMessage: Object = {'message': 'The requested resource could not be found.'}
    public static errorMessage: Object = {'message': 'Oops! Something went wrong.'}
}