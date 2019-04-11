require("dotenv").config();

let keys = require("./keys.js");

let spotify = new Spotify(keys.spotify);

/* let spotify = require('node-spotify-api');
let axios = require("axios");
let moment = require("moment");
let dotenv = require("dotenv");
 */

let axios = require("axios");

let command = process.argv[2];
let input = process.argv.slice(3).join("+");



if (command === "movie-this") {

    // We then run the request with axios module on a URL with a JSON
    axios.get(`http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`).then(
        function (response) {
            // Then we print out the imdbRating
            /*  * Title of the movie.
             * Year the movie came out.
             * IMDB Rating of the movie.
             * Rotten Tomatoes Rating of the movie.
             * Country where the movie was produced.
             * Language of the movie.
             * Plot of the movie.
             * Actors in the movie. */
            console.log("The movie's title is: " + response.data.Title);
            console.log("The movie's release year is: " + response.data.Year);
            console.log("The movie's IMD rating is: " + response.data.imdbRating);
            console.log("The movie's Rotten Totmatoes Rating is: " + response.data.Ratings[1].Value);
            console.log("The movie's country of production: " + response.data.Country);
            console.log("The movie's language is in: " + response.data.Language);
            console.log("The movie's plot is: " + response.data.Plot);
            console.log("The movie's actors are: " + response.data.Actors);
        }
    );

}

