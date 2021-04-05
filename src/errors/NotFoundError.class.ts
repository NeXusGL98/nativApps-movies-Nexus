import { CustomError } from './CustomError.class';


export class NotFoundError extends CustomError {
    statusCode = 404
    constructor(message:string = "Not found") {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.message
            }
        ]
    }

}