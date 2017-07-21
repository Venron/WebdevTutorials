// Lade die ul in die Variable $status
var $status = $('#status');
console.log($status);

// Reihenfolge, in der geladen werden soll:
// Profile, Tweets, (Mentioned) Friend
$.ajax({
  type: "GET",
  url: "content/profile.json",
  success: function(profile) {
    $status.append("<li>loaded profile</li>");
    $("#profile-pre").html(JSON.stringify(profile));
    $.ajax({
      type: "GET",
      url: "content/tweets.json?id=" + profile.id,
      success: function(tweets) {
        $status.append("<li>loaded tweets</li>");
        $("#tweets-pre").html(JSON.stringify(tweets));
        $.ajax({
          type: "GET",
          url: "content/friend.json?id=" + tweets[0].usersMentioned[0].id,
          success: function(friend) {
            $status.append("<li>loaded friend</li>");
            $("#friend-pre").html(JSON.stringify(friend));
          },
          error: function(xhr, status, error) {
            $status.append("<li>error (xhr): " + xhr.toString() + "</li>");
            $status.append("<li>error (status): " + status.toString() + "</li>");
            $status.append("<li>error (error): " + error.toString() + "</li>");
          }
        });
      },
      error: function(xhr, status, error) {
        $status.append("<li>error (xhr): " + xhr.toString() + "</li>");
        $status.append("<li>error (status): " + status.toString() + "</li>");
        $status.append("<li>error (error): " + error.toString() + "</li>");
      }
    });
  },
  error: function(xhr, status, error) {
    $status.append("<li>error (xhr): " + xhr.toString() + "</li>");
    $status.append("<li>error (status): " + status.toString() + "</li>");
    $status.append("<li>error (error): " + error.toString() + "</li>");
  }
});
