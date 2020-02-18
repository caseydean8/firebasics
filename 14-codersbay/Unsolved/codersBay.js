// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var firebaseConfig = {
  apiKey: "AIzaSyCDkCF8ZonG6gg_fh8KTTUhNQkZZYJ5ZI0",
  authDomain: "codersbayact14-1e260.firebaseapp.com",
  databaseURL: "https://codersbayact14-1e260.firebaseio.com",
  projectId: "codersbayact14-1e260",
  storageBucket: "codersbayact14-1e260.appspot.com",
  messagingSenderId: "706559870678",
  appId: "1:706559870678:web:203bb560801c3c6ec1ab77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Assign the reference to the database to a variable named 'database'
// var database = ...
const db = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;
async = true;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
db.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  const sv = snapshot.val();
  // If Firebase has a highPrice and highBidder stored (first case)
  if (sv.bid > highPrice) {
    highPrice = sv.bid;
    highBidder = sv.name;
  }
  $("#highest-bidder").text(highBidder);
  $("#highest-price").text(highPrice);
});

// Set the variables for highBidder/highPrice equal to the stored values in firebase.
// highPrice = ...
// highBidder = ...

// Change the HTML to reflect the stored values

// Print the data to the console.

// Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.

// Change the HTML to reflect the initial values

// Print the data to the console.

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // prevent form from submitting with event.preventDefault() or returning false
  event.preventDefault();
  // Get the input values
  const name = $("#bidder-name").val();
  const bid = $("#bidder-price").val();
  // Log the Bidder and Price (Even if not the highest)
  console.log(`name: ${name}`);
  console.log(`bid: ${bid}`);
  // If Then statements to compare against previous high bidder
  if (bid > highPrice) {
    // Alert that they are High Bidder
    alert(`you are the new high bidder! hip hip hooray!!!`);
    // Save the new price in Firebase
    db.ref().set({ bid: bid, name: name });
    // Log the new High Price
    console.log(bid);
    // Store the new high price and bidder name as a local variable (could have also used the firebase variable)
    highPrice = bid;
    highBidder = name;
    // Else tell user their bid was too low via alert
  } else alert(`suck it cheapass !!!`);
  $("#bidder-name, #bidder-price").val("");
});

// Change the HTML to reflect the new high price and bidder
