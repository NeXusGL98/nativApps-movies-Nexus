import { NextFunction, Request, Response, Router } from 'express';
import { NotFoundError } from '../errors/NotFoundError.class';
import moviesRouter from './movies.routes';
import 'express-async-errors'

const routes = Router();


routes.use('/movies',moviesRouter);


routes.all('*',(request: Request, response: Response,next:NextFunction) => {
    throw new NotFoundError()
});

export default routes;