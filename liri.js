require("dotenv").config();

let moment = require('moment');

let keys = require("./keys.js");

let axios = require("axios");

let command = process.argv[2];
let input = process.argv.slice(3).join("+");

if (command === "concert-this") {

    axios.get(`https://rest.bandsintown.com/artists/${input}/?app_id=codingbootcamp`).then(
        function (response) {

            console.log("The artist/band's name is: " + response.data.name);

        }
    );

    // We then run the request with axios module on a URL with a JSON
    axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`).then(
        function (response) {
            
            console.log("The artist/band's is playing at: " + response.data[0].venue.name);
            console.log("Location of the Venue: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
            console.log("Date of the event: " + response.data[0].venue.city);

        }
    );

};

let Spotify = require('node-spotify-api');

let spotify = new Spotify({
    id: 'ebb9fd21b387499b962ede43a9212592',
    secret: 'a556a21aba2348e4ab35a3bb38bb7b0d'
});


if (command === "spotify-this-song") {
    
    spotify.search({ type: 'track', query: input }).then(
        function (response) {


            //console.log(response);

            /*  console.log(response.tracks);
             console.log("----------------------------------------"); */
            /* console.log(response.tracks.items);
            console.log("----------------------------------------"); */
            console.log(response.tracks.items[0]);
            console.log("----------------------------------------");
            console.log("this is the song name " + response.tracks.items[0].name);
            console.log("----------------------------------------");
            console.log("this is the link to the track preview " + response.tracks.items[0].album.preview_url);



            /* console.log(response.tracks.items[0].album);
            console.log("----------------------------------------");
            console.log(response.tracks.items[0].album.artists);
            console.log("----------------------------------------"); */
            console.log("this gets the artist/band's name " + response.tracks.items[0].album.artists[0].name);
            console.log("----------------------------------------");
            console.log("this gets the album name " + response.tracks.items[0].album.name);
            console.log("----------------------------------------");
            /* console.log(response.tracks.items[0].album.external_urls);
            console.log("----------------------------------------"); */
            console.log("this gets the link to the album " + response.tracks.items[0].album.external_urls.spotify);
        });


    //CREATE IF ELSE TO GET "The Sign" by Ace of Base WHEN NOTHING COMES UP
};

if (command === "movie-this") {

    // We then run the request with axios module on a URL with a JSON
    axios.get(`http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=trilogy`).then(
        function (response) {

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

};

let fs = require("fs");

if (command === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        //console.log(data);

        input = data.split(" ").join("+");

        spotify.search({ type: 'track', query: input }).then(
            function (response) {
               
                console.log("Song name: " + response.tracks.items[0].name);
                console.log("----------------------------------------");
                console.log("Link to the track preview: " + response.tracks.items[0].album.preview_url);
                console.log("----------------------------------------");
                console.log("The artist/band's name: " + response.tracks.items[0].album.artists[0].name);
                console.log("----------------------------------------");
                console.log("The album name: " + response.tracks.items[0].album.name);
                console.log("----------------------------------------");
                console.log("The link to the album: " + response.tracks.items[0].album.external_urls.spotify);
            });
    


    });

};
