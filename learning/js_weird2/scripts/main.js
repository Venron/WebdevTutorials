var obj = {
  foo: function() {
    // console.log("foo::this == obj: " + (this == obj));
    // console.log("foo::this == window: " + (this == window));
    console.log(this);
  },
  bar: function(one, two) {
    console.log("bar::this == obj: " + (this == obj));
    console.log("bar::this == window: " + (this == window));
    console.log("Sum: " + (one + two));
  }
}

$(document).ready(function() {
  $("li").click(function() {
    // var currentTimes = parseInt($("li span").html()); // Hole den Wert aus den spans, in denen jeweils nur die Klickzahl steht
    var currentTimes = parseInt($(this).find("span").html());
    // $("li span").html(currentTimes+1);
    $(this).find("span").html(currentTimes+1);
  });
});

/*
obj.foo();
obj.foo.call(window);
obj.bar(4, 5);
obj.bar.call(window, 6, 7);
obj.bar.apply(window, [8, 9]);

var myBoundFoo = obj.foo.bind(window);
myBoundFoo();
myBoundFoo();
var myBoundFoo2 = obj.foo.bind(obj);
myBoundFoo2();

var myBoundBar = obj.bar.bind(window, 2, 3);
myBoundBar();

$(document).ready(function() {
  $("body").click(obj.foo);
});
*/
