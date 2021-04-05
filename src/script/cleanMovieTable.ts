import connectToDatabase from "../database/utils";


const cleanMoviesTable = async () => {
    let connection;
    try {
        connection = await connectToDatabase();
        const tableRunner = connection.createQueryRunner('master');
        await tableRunner.dropTable('jose_gil_movies', true);
    } catch (error) {
        throw new Error(`❌ Error while inserting into the dabatase. ${error}`);
    } finally {
        console.log('⌚ Closing database connection for clean movies script.')
        if (connection) {
            await connection.close()
            console.log('✔ Connection closed successfully.')
        }
    }
};

cleanMoviesTable();