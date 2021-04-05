
import { Request, Response, Router } from 'express';
import { findAll } from '../controllers/movies.controller';

const moviesRouter = Router();

moviesRouter.get('/', findAll);

export default moviesRouter;