
var buttonSelect = document.querySelector("#button");
buttonSelect.addEventListener('click', function (){
    var $title = document.querySelector('#titleInput').value;
    var $length = document.querySelector('#lengthInput').value;
    var $gender = document.querySelector('#movieGender').value;

   var lenNum = parseFloat($length);
   var genre = new Genre($gender);
   var movie = new Movie($title,lenNum,genre);
   
   addMovie(movie);

   var ul = document.querySelector("#ulId");
    ul.innerHTML += "<li>" + movie.getData() + "</li>";
     document.querySelector("#titleInput").value = "";
    document.querySelector("#lengthInput").value = "";
    document.querySelector("#movieGender").value = "-";
     var allMovie = allMovieLength();
    document.querySelector("#allMoviesLength").innerText = "All movies length: " + allMovie + ' min.';

})  
