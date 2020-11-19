const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");

//to use cross orign resoruce sharing
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    
    //parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({extended:false})
    )
    
    //parse application/json
    app.use(bodyParser.json())

//hard coiding json data too object in a get request
app.get('/api/movies',(req,res)=>{
    const mymovies = [
    {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "imdbID":"tt4154756",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "imdbID":"tt3498820",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        
    ];
    res.status(200).json({
        Message: "Everything is ok",
        movies:mymovies});
})

//Creates a root point listening for a post request too api/moveies and pull title year and poster from body
app.post('/api/movies',(req, res)=>{
  console.log('Movie Recieved')
  console.log(req.body.Title);
  console.log(req.body.Year);
  console.log(req.body.Poster);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})