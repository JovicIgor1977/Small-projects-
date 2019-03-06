(function execute() {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  Person.prototype.getData = function() {
    return this.name + " " + this.surname;
  };

  function Seat(number, category) {
    this.number = number;
    this.category = category;

    if (this.number === undefined) {
      this.number = Math.ceil(Math.random() * (100 - 10)) + 10;
    }
    if (this.category === undefined) {
      this.category = "e";
    }
  }

  Seat.prototype.getData = function() {
    return this.number + ", " + this.category;
  };

  function Passenger(personObj, seatObj) {
    this.person = personObj;
    this.seat = seatObj;
  }

  Passenger.prototype.getData = function() {
    var fullCategoryName;
    if (this.seat.category == "e") {
      fullCategoryName = "economy";
    } else if (this.seat.category == "b") {
      fullCategoryName = "business";
    }
    return (
      this.seat.number + ", " + fullCategoryName + ", " + this.person.getData()
    );
  };

  function Flight(relation, date) {
    this.relation = relation;
    this.date =
      new Date(date).getDate() +
      ". " +
      new Date(date).getMonth() +
      ". " +
      new Date(date).getFullYear();
    this.listOfPassengers = [];
    this.numOfPassengers = 0;
  }

  Flight.prototype.addPassenger = function(instanceOfPassenger) {
    for (var i = 0; i < this.listOfPassengers.length; i++) {
        if(i == 4) return;
      var currentPassenger = this.listOfPassengers[i];
      var currentSeatNumber = currentPassenger.seat.number;
      var currentFullName = currentPassenger.person.getData();
      if (instanceOfPassenger.seat.number == currentSeatNumber) {
        instanceOfPassenger.seat.number = Math.ceil(
          Math.random() * (100 - 10) + 10
        );
         i = -1;
        continue;
      }
      if (instanceOfPassenger.person.getData() == currentFullName) {
        this.listOfPassengers[i] = instanceOfPassenger;
        return;
      }
      
    }

    this.listOfPassengers.push(instanceOfPassenger);
    this.numOfPassengers++;
    if(this.numOfPassengers == 5){
       console.log('Flight is full');
        return;
    }
   
  };
  Flight.prototype.getData = function() {
    var string = "";
    var singlePassenger = "";

    string = this.date + ", " + this.relation + "\n";
    for (var i = 0; i < this.listOfPassengers.length; i++) {
      singlePassenger += this.listOfPassengers[i].getData() + "\n\t\t";
    }
    return string + "\t\t" + singlePassenger;
  };

  Flight.prototype.arangeRelation = function() {
    var nizSlova = this.relation.split(" - ");
    var nizTrazenihSkracenca = [];
    for (var i = 0; i < nizSlova.length; i++) {
      var nizSuglasnika = [];
      var trenutnaRec = nizSlova[i];
      for (var j = 0; j < trenutnaRec.length; j++) {
        var trenutnoSlovo = trenutnaRec[j];
        switch (trenutnoSlovo) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
            break;
          default:
            nizSuglasnika.push(trenutnoSlovo);
            break;
        }
      }
      var lastIndex = nizSuglasnika.length - 1;
      var prviSuglasnik = nizSuglasnika[0];
      var poslednjiSuglasnik = nizSuglasnika[lastIndex];
      var trazenaSkracenica =
        prviSuglasnik.toUpperCase() + poslednjiSuglasnik.toUpperCase();
      nizTrazenihSkracenca.push(trazenaSkracenica);
    }
    return nizTrazenihSkracenca.join(" - ");
  };

  function Airport(name) {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
  }
  Airport.prototype.addFlight = function(instanceOfFlight) {
    this.listOfFlights.push(instanceOfFlight);
  };

  Airport.prototype.getData = function() {
    var singleFlightData = "";
    var num = 0;
    var string = "Airport: " + this.name + ", ";
    for (var i = 0; i < this.listOfFlights.length; i++) {
      singleFlightData += "\t" + this.listOfFlights[i].getData() + "\n";
      num += this.listOfFlights[i].numOfPassengers;
    }
    return string + "total passengers: " + num + "\n" + singleFlightData;
  };

  function createPassenger(name, surname, number, category) {
    var person = new Person(name, surname);
    var seat = new Seat(number, category);

    return new Passenger(person, seat);
  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  ///////////////////////create Airport///////////////////////////////////
  var AerodromBeograd = new Airport("Nikola Tesla");

  //////////////////////////////create flights///////////////////////////
  var flight1 = createFlight("Belgrade - New York", "2018, 3, 5");
  var flight2 = createFlight("Barcelona - Belgrade", "2018, 6, 6");
  console.log(flight1.arangeRelation());
  ////////////////////////////////create passengers//////////////////////////

  var passenger1 = createPassenger("John", "Snow", 1, "b");
  console.log(passenger1);
  var passenger2 = createPassenger("Carsei", "Lannister", 1, "b");
  var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
  var passenger4 = createPassenger("Tyrion", "Lannister");
  var passenger5 = createPassenger("Tyrionn", "Lannisters" , 'e');
  var passenger6 = createPassenger("Trion", "Bannister");

  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight1.addPassenger(passenger3);
  flight1.addPassenger(passenger4);
  flight1.addPassenger(passenger5);
  flight1.addPassenger(passenger6);

  AerodromBeograd.addFlight(flight1);
  AerodromBeograd.addFlight(flight2);

  console.log(AerodromBeograd.getData());
})();
