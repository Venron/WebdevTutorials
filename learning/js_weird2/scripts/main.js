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
  $("#opendiv").click(function() {
    var self = this;
    // der slideToggle()-Methode kann nun auch eine Callback-Funktion
    // übergeben werden, die ausgeführt wird, sobald die Slide-Animation vollständig ausgeführt wurde
    $("#div1").slideToggle(300, function() {
       // $(this).toggleClass("active"); // ACHTUNG: Hier darf nicht mehr $(this) verwendet werden, da this nun auf #div1 zeigt!
       $(self).toggleClass("active"); // toggleActive erst, wenn die Slide-Animation vollständig ausgeführt wurde
       // Vorgehen: "self" wurde nicht in dem aktuellen Kontext erzeugt, deswegen schaue ich nun,
       // ob "self" im Parent-Scope erzeugt wurde. Ja? Benutze diese Variable. "self" zeigt jetzt auf this von #opendiv
       // Alternative: bin() benutzen
    //}.bind(this)); // ==> dann kann wieder $(this) anstatt $(self) verwendet werden, da nämlich der this-Kontext übergeben wurde
  });
  });
});

/*
$(document).ready(function() {
  $("li").click(function() {
    // var currentTimes = parseInt($("li span").html()); // Hole den Wert aus den spans, in denen jeweils nur die Klickzahl steht
    var currentTimes = parseInt($(this).find("span").html());
    // $("li span").html(currentTimes+1);
    $(this).find("span").html(currentTimes+1);
  });
});


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
