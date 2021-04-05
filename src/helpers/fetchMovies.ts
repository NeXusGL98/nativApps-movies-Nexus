import axios from 'axios';
import { config } from 'dotenv';
import IOMDBMovie from '../interfaces/IOMBDMovie.interface';
config();


const fetchMoviesBySearchAndYear = (search: string, year: number): Promise<IOMDBMovie[]> => {
    const key = process.env.OMDB_API_KEY;
    return new Promise((resolve,reject) => {
        axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${search}&y=${year}`)
        .then(response => {

            if (response.data?.Search) {
                resolve(response.data?.Search);
            }else{
                reject('Error fetching the movies from the api.');
            }
        }).catch(error => {
            reject(`Error fetching the movies from the api ${error.message}`);
        });
    })
}

export default fetchMoviesBySearchAndYear;