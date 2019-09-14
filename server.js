/*
*  Write a server that will respond with the appropriate JSON blob 
*  for the given rendering
*/
var express = require('express');
var app = express();
var albums = require('./abstractions/albums.js');
var circles = require('./abstractions/circles.js');
var movies = require('./abstractions/movies.js');
var nameTags = require('./abstractions/nameTags.js');
var poker = require('./abstractions/poker.js');
var rectangle = require('./abstractions/rectangle.js');
var restaurants = require('./abstractions/restaurants.js');
var students = require('./abstractions/students.js');
var surveys = require('./abstractions/surveys.js');
var tweets = require('./abstractions/tweets.js');


app.use(express.static(__dirname + '/public'));

// GET /api/albums
function handleAlbums(request, response, nextFn){
    response.json(albums);
}
app.get('/api/albums', handleAlbums)

// GET /api/circles
function handleCircles(req, res, nextFn) {
    res.json(circles)
 }
 app.get('/api/circles', handleCircles)

// GET /api/movies
app.get('/api/movies', function(request, response, nextFn){
    response.json(movies)
})

// GET /api/nametags
function handleNameTags(request, response, nextFn){
    response.json(nameTags);
}
app.get('/api/nametags', handleNameTags)

// GET /api/poker

app.get('/api/poker', function(req, res, nextFn){
    res.json(poker)
})

// GET /api/rectangle
function handleRectangle(req, res, nextFn) {
    res.json(rectangle)
 }
 app.get('/api/rectangle', handleRectangle)

// GET /api/restaurants
function handleRestaurants(req, res, nextFn){
    res.json(restaurants)
}

app.get('/api/restaurants', handleRestaurants)

// GET /api/students

app.get('/api/students', function(req, res, nextFn){
    res.json(students)
})

// GET /api/surveys

app.get('/api/surveys', function(req, res, nextFn){
    res.json(surveys)
})


// GET /api/tweets
app.get('/api/tweets', function(req, res, nextFn){
    res.json(tweets)
})


app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})