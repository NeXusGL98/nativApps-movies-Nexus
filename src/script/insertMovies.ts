import connectToDatabase from "../database/utils";
import { Movie } from "../entities/Movie.entity";
import fetchMoviesBySearchAndYear from "../helpers/fetchMovies"
import movieMapper from "../helpers/movieMapper";



const insertMovies = async () => {


    const connection = await connectToDatabase();
    try {
        const movies = await fetchMoviesBySearchAndYear('Love', 2020);
        const mapper = movieMapper(movies);

        await connection.manager.save(Movie, mapper)
        console.log(`✔ [${mapper.length}] Movies inserted in the database`);
    } catch (error) {
        throw new Error(`❌ Error while inserting into the dabatase. ${error}`);
    } finally {
        console.log('⌚ Closing database connection for the insertMovies script.')
        await connection.close()
        console.log('✔ Connection closed successfully.')
    }

}

insertMovies();