import { CustomError } from './CustomError.class';


export class DatabaseConnectionError extends CustomError {
    statusCode = 500
    reason = 'Error connecting to dabatase';
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ]
    }

}