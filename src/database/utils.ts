import { Connection, createConnection } from "typeorm";
import connectionOptions from "./ormconfig";

let connection: Connection;

const connectToDatabase = async () => {

    if (connection?.isConnected && connection !== undefined) {
        console.log(`⚡️ [database-instance]: Database is connected.`);
        return connection;
    }
    try {
        connection = await createConnection(connectionOptions);
    } catch (error) {
        console.log('Could not connect to the database');
        console.log(error);
        process.exit();
    }
    if (!connection.isConnected)
        throw new Error('There is not connection to the DB.');

    console.log(`⚡️ [database]: Database is connected.`);

    return connection;
}

export default connectToDatabase;