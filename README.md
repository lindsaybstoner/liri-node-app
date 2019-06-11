# Liri Node App
CLI Siri knock-off (Language Interpretation and Recognition Interface) where you will be able to write one of the four commands "concert-this", "spotify-this-song", "movie-this", or "do-what-it-says" and put either a name of a artist, song, or movie (whatever is applicable) and it will return you information.  

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
1. Git clone the repo onto your local machine
2. Create a .env file to store your personal infomation
```
touch .env
```
3. Sign up for an account with [Spotify API](https://developer.spotify.com/documentation/web-api/) in order to have your own ID and Secert keys. 
Update your .env file with own ID and Secert keys into two variables named SPOTIFY_ID and SPOTIFY_SECRET, respectively. 
4. Run NPM Install within your local file in order to get a node_modules folder
```
npm install
```
5. Run with any of the four options in the command line:
```
node liri.js concert-this '<artist/band name here>'
```
```
node liri.js spotify-this-song '<song name here>'
```
```
node liri.js movie-this '<movie name here>'
```
```
node liri.js do-what-it-says
```
node liri.js concert-this '<artist/band name here>'
    b. node liri.js spotify-this-song '<song name here>'
    c. node liri.js movie-this '<movie name here>'
    d. node liri.js do-what-it-says

## Built With
* [Javascript](https://www.javascript.com/) - Programming language
* [Node.js](https://nodejs.org/en/) - Server side Javascript
* [Axios](https://www.npmjs.com/package/axios) - NPM package for single API to handle XMLHttpRequests in node.js
* [Moment.js](https://momentjs.com/) - NPM package to display dates and times in JavaScript
* [Spotify API](https://www.npmjs.com/package/node-spotify-api) - NPM package to access Spotify API
* [BandsinTown API](http://www.artists.bandsintown.com/bandsintown-api) - API for tour infomation for searched artist
* [OMDB API](http://www.omdbapi.com/) - API for movie data

## Authors
* **Lindsay Stoner** - [lindsaybstoner](https://github.com/lindsaybstoner)

## Acknowledgments
* Template from Trilogy education services 