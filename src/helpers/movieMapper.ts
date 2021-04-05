import { Movie } from "../entities/Movie.entity";
import IOMDBMovie from "../interfaces/IOMBDMovie.interface";
import { refactorYear } from "./utils";




const movieMapper = (movies: IOMDBMovie[]): Movie[] => {
    return movies.map(movie => {
        const movieEntity = new Movie();
        movieEntity.title = movie.Title;
        movieEntity.imdbID = movie.imdbID;
        movieEntity.poster = movie.Poster;
        movieEntity.type = movie.Type;
        movieEntity.year = Number(refactorYear(movie.Year));
        return movieEntity;
    })
}


export default movieMapper;