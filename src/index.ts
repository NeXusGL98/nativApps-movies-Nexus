// Typeorm configuration step, please do not touch this line of code.
import "reflect-metadata";

import 'express-async-errors'
import { config } from 'dotenv';
import { Server } from "./server/Server.class";

config();

const server = new Server();

server.start();