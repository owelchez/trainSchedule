  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCMdiGQODXX8fIYD6TwnHwudslL68duIHQ",
    authDomain: "trainschedule-20b45.firebaseapp.com",
    databaseURL: "https://trainschedule-20b45.firebaseio.com",
    storageBucket: "trainschedule-20b45.appspot.com",
  };
  firebase.initializeApp(config);

  var database = firebase.database();


$('#submit').on('click', function(){

	// Retrieve user inputs from form
	var trainName = $('#trainName').val().trim();
	var destination = $('#destination').val().trim();
	var firstTrain = $('#firstTrain').val().trim();
	var frequency = $('#frequency').val().trim();

	// Create an object for new train to be added
	var newTrain = {
		trainName: trainName,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency
	}

	
	database.ref().push(newTrain);

	$('#trainName').val('');
	$('#destination').val('');
	$('#firstTrain').val('');
	$('#frequency').val('');



	return false;

});


database.ref().on('child_added', function(childSnapshot) {

	

});






































