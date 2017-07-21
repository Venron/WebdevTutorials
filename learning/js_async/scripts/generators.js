var $status = $("#status");

var myGen = function*() {
  var one = yield 1;
  var two = yield 2;
  var three = yield 3;
  console.log(one, two, three);
}

var gen = myGen();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


/*
Promise.coroutine(function*() {
  var profile = yield $.get("content/profile.json");
  $status.append("<li>got profile</li>");
  $("#profile-pre").html(JSON.stringify(profile));

  var tweets = yield $.get("content/tweets.json?id=" + profile.id);
  $status.append("<li>got tweets</li>");
  $("#tweets-pre").html(JSON.stringify(tweets));

  var friend = yield $.get("content/friend.json?id=" + tweets[0].usersMentioned[0].id);
  $status.append("<li>got friend</li>");
  $("#friend-pre").html(JSON.stringify(friend));
})().catch(function(errs) {
  //handle errors on any events
});

function handleError(errs) {
  console.log(errs);
}
*/
