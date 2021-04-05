import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import connectToDatabase from '../database/utils';
import { errorHandler } from '../middlewares/errorHandler';
import routes from '../routes/main.routes';

export class Server {

    app: express.Application
    port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.APP_PORT);
    }


    async start() {
        await connectToDatabase()
        this.app.use(cors({
           origin:['http://localhost:4200'] 
        }))
        this.app.use(routes);
        this.app.use(errorHandler);
        this.listen();
    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}.`);
        });
    }
}