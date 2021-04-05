# Movies Backend
This project uses Nodejs express + typescript to run

# npm run start
Run `npm run start` to build the project and run the server.

# npm run script:movies
Run `npm run script:movies` if you want to insert the movies fetched from omdbapi to our database ( this is not neccessary when exec npm run start, because npm run start also runs this cmd).

# npm run script:cleanMovies
Run `npm run script:cleanMovies` drops the table "jose_gil_movies" (this delete all the previous data).

# api 
After run npm run start you can now test the movies api at http://localhost:3000/movies, also you can find the postman in the project's doc folder.

# Get some help
if the npm run script:movies fails you can retry it again running the npm run script:movies to fetch all the movies from omdbapi to our server.


