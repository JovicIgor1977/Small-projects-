
function Genre(name){
    this.name = name;
}

Genre.prototype.getData = function(){
    return (this.name[0]+this.name[this.name.length-1]).toUpperCase();
}

function Movie(name, duration, genre){
    this.name = name;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getData = function(){
    return this.name + ' ' + this.duration + ' min, ' + this.genre.getData();
}

var movieList = [];
function addMovie(movie){
    movieList.push(movie);
}

function allMovieLength(){
    let sum = 0;
    movieList.forEach(movie => {
        sum += movie.duration
    });
//    for(var i = 0; i < movieList.length; i++){
//        sum += movieList[i].duration;
//    }
   return sum;
}