require("dotenv").config();

const moment = require('moment');

const keys = require("./keys.js");

const axios = require("axios");

const fs = require('fs');

const Spotify = require('node-spotify-api');

const spotify = new Spotify({
    id: 'ebb9fd21b387499b962ede43a9212592',
    secret: 'a556a21aba2348e4ab35a3bb38bb7b0d'
});


let command = process.argv[2];
let input = process.argv.slice(3).join("+");

switch (command) {
    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        runSpotify();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        other();
        break;
}

function concert() {

    axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`).then(
        function (response) {

            console.log(`Next ${input} concert is at: ${response.data[0].venue.name}`);
            console.log("Location of the Venue: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
            console.log("Date of the event: " + response.data[0].venue.city);

        }
    );

    axios.get(`https://rest.bandsintown.com/artists/${input}/?app_id=codingbootcamp`).then(
        function (response) {

            console.log("The artist/band's name is: " + response.data.name);

        }
    );

};

function spotifyInfo() {
    spotify.search({ type: 'track', query: input }).then(
        function (response) {
            console.log("Song name: " + response.tracks.items[0].name);
            console.log("this is the link to the track preview " + response.tracks.items[0].album.preview_url);
            console.log("this gets the artist/band's name " + response.tracks.items[0].album.artists[0].name);
            console.log("this gets the album name " + response.tracks.items[0].album.name);
            console.log("this gets the link to the album " + response.tracks.items[0].album.external_urls.spotify);
        } 
    );
}


function runSpotify() {

    input = process.argv.slice(3).join("+");

    if (!input) {
     
        input = "The+Sign"

        //by Ace of Base
        
        spotifyInfo();

    } else {
        
        spotifyInfo();

    };

};

function movieInfo() {
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
}

function movie() {

    if (!input) {
        input = 'mr.nobody'
        movieInfo();
    }

    else {
        movieInfo();
    }

};

function other() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        console.log(data);

        input = data.split(" ").join("+");

        spotifyInfo();

    });

};
