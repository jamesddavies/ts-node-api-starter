export default class Utilities {

    public static generateNumber = (max: number, min: number): number => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    
}