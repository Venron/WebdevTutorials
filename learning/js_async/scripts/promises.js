$status = $("#status");

$.get("content/profile.json").then(function(profile) {
  $status.append("<li>got profile</li>");
  $("#profile-pre").html(JSON.stringify(profile));
  return $.get("content/tweets.json?id=" + profile.id);
}).then(function(tweets) {
  $status.append("<li>got tweets</li>");
  $("#tweets-pre").html(JSON.stringify(tweets));
  return $.get("content/friend.json?id=" + tweets[0].usersMentioned.id);
}).then(function(friend) {
  $status.append("<li>got friend</li>");
  $("#friend-pre").html(JSON.stringify(friend));
}, handleError);

function handleError(xhr, status, error) {
  console.log("got an error: " + status.toString());
}

/*
// Promise erstellen
var getProfile = $.ajax({type: "GET", url: "content/profile.json"});

// Alle Promises haben eine .then(success, error) Methode
// Problem, .then für kleine Funktionen zu verwenden macht es nicht viel übersichtlicher
getProfile.then(function(data) {
  console.log("Success: " + JSON.stringify(data));
},
function(xhr, state, error) {
  console.log("Error: " + arguments);
});
*/

// Promises sind allerdings besonders hilfreich, wenn es darum geht, Operationen zu verketten
// Der Wert, den then() returned wird dem nächsten then() übergeben
// Chained Promises

/*
$.get("content/profile.json").then(function(profile) {
  $status.append("<li>got the profile. printing...</li>");
  $("#profile-pre").html(JSON.stringify(profile));
  return $.get("content/friend.json?id=" + profile.id);
}).then(function(friend) {
  $status.append("<li>got the friend. printing...</li>");
  $("#friend-pre").html(JSON.stringify(friend));
}, function(xhr, status, error) {
  console.log("error at chained promises.");
});
*/

// Noch mehr vereinfacht:
/*
var getProfile = $.get("content/profile.json");
var getFriend = $.get("content/profile.json");

// profile und friend sind arrays mit (data, status, xhr)
$.when(getProfile, getFriend).then(function(profile, friend) {
  $status.append("<li>got profile</li>");
  $("#profile-pre").html(JSON.stringify(profile[0]));
  $status.append("<li>got friend</li>");
  $("#friend-pre").html(JSON.stringify(friend[0]));
}, function(xhr, status, error) {
  console.log("error: " + arguments);
});
*/
