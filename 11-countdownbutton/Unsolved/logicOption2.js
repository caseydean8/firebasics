// Initialize Firebase (YOUR OWN APP)
const firebaseConfig = {
  apiKey: "AIzaSyCDCb5kyDQP0_UL61WXHlDBn7875h0T-zU",
  authDomain: "simpleclkbtn.firebaseapp.com",
  databaseURL: "https://simpleclkbtn.firebaseio.com",
  projectId: "simpleclkbtn",
  storageBucket: "simpleclkbtn.appspot.com",
  messagingSenderId: "866511009833",
  appId: "1:866511009833:web:1a9afb962de14771b18438",
  measurementId: "G-V3HQ3TT49W"
};
console.log("here");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//  firebase.analytics();
var database = firebase.database();
// console.log(database);
// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------
// At the initial load, get a snapshot of the current data.
database.ref().on(
  "value",
  function(snapshot) {
    async = true;
    // Print the initial data to the console.
    console.log(snapshot.val());
    // Change the clickCounter to match the data in the database
    clickCounter = snapshot.val().clicks;
    // Change the html to reflect the initial value.
    $("#click-value").text(clickCounter);
  },
  function(errorObj) {
    console.log(`read failed: ${errorObj.code}`);
  }
);

$("#click-button").on("click", function() {
  clickCounter--;
  database.ref().set({
    clicks: clickCounter
  });
});

$("#restart-button").on("click", function() {
  database.ref().set({
    clicks: initialValue
  });
});

// Log the value of the clickCounter

// Change the HTML Value

// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {
  // Reduce the clickCounter by 1
  // Alert User and reset the counter
  // Save new value to Firebase
  // Log the value of clickCounter
});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {
  // Set the clickCounter back to initialValue
  // Save new value to Firebase
  // Log the value of clickCounter
  // Change the HTML Values
});
