var $status = $("#status");

$.ajax({
  type: "GET",
  url: "content/profile.json",
  success: getTweets,
  error: handleError
});

function getTweets(profile) {
  $status.append("<li>loaded profile</li>");
  $("#profile-pre").html(JSON.stringify(profile));

  $.ajax({
    type: "GET",
    url: "content/tweets.json?id=" + profile.id,
    success: getMentionedUser,
    error: handleError
  });
}

function getMentionedUser(tweets) {
  $status.append("<li>loaded tweets</li>");
  $("#tweets-pre").html(JSON.stringify(tweets));

  $.ajax({
    type: "GET",
    url: "content/friend.json?id=" + tweets[0].usersMentioned[0].id,
    success: function(friend) {
      $status.append("<li>loaded mentioned friends</li>");
      $("#friend-pre").html(JSON.stringify(friend));
    },
    error: handleError
  });
}

function handleError(xhr, status, error) {
  $status.append("<li>error (xhr): " + xhr.toString() + "</li>");
  $status.append("<li>error (status): " + status.toString() + "</li>");
  $status.append("<li>error (error): " + error.toString() + "</li>");
}
