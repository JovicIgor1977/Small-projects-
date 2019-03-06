(function execution() {
  function Genre(name) {
    this.name = name;

    this.getData = function() {
      return (
        this.name[0].toUpperCase() +
        this.name[this.name.length - 1].toUpperCase()
      );
    };
  }

  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

    this.getData = function() {
      return this.title + ", " + this.length + "min, " + this.genre.getData();
    };
  }

  function Program(date) {
    this.date = new Date(date).toDateString();
    this.listOfMovies = [];
    this.totalNumberOfMovies = 0;

    this.addMovie = function(movie) {
      this.listOfMovies.push(movie);
      this.totalNumberOfMovies++;
    };

    this.getData = function() {
      var programLength = 0;
      var programList = "";
      for (var i = 0; i < this.listOfMovies.length; i++) {
        programLength += this.listOfMovies[i].length;
        programList += this.listOfMovies[i].getData() + "\n" + "\t\t";
      }
      return (
        "\t" +
        this.date +
        ", program duration " +
        programLength +
        "min \n" +
        "\t\t" +
        programList
      );
    };
  }

  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMoviesInAllPrograms = 0;

    this.addProgram = function(program) {
      this.listOfPrograms.push(program);
      this.numberOfMoviesInAllPrograms++;
    };

    this.getData = function() {
      var string = "";
      var total = 0;
      for (var i = 0; i < this.listOfPrograms.length; i++) {
        string += this.listOfPrograms[i].getData() + "\n";
        total += this.listOfPrograms.length;
      }
      return this.name + " has " + total + " movie titles\n" + string;
    };
  }

  function createMovie(title, genre, length) {
    var genreObject = new Genre(genre);
    return new Movie(title, genreObject, length);
  }

  function createProgram(date) {
    return new Program(date);
  }

  var Spider = createMovie("Spider-Man:Homecoming", "action", 133);
  var War = createMovie("War for the planet of the Apes", "action", 140);
  var Dark = createMovie("The Dark Tower", "action", 95);
  var Deadpul = createMovie("Deadpul", "cyber", 108);

  var letnji = createProgram("2018, 8, 3");
  var proletnji = createProgram("2018, 5, 12");

  letnji.addMovie(Spider);
  letnji.addMovie(War);
  letnji.addMovie(Dark);
  proletnji.addMovie(Deadpul);

  var Glavni = new Festival("Weekend Festival");
  Glavni.addProgram(letnji);
  Glavni.addProgram(proletnji);

  console.log(Glavni.getData());
})();
