/*
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

// click, mouseenter, mouseleave, mousedown, mouseup, mousemove, keydown, keyup, blur, focus
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  var sum = one + two;
  addSum.innerHTML = "your sum is: " + sum;
}
*/

/*
var tracer = document.getElementById('tracer');
var tracerPic = document.getElementById('tracer-pic');

tracer.addEventListener("click", function() {
  if(tracerPic.className === "hide") {
    tracerPic.className = "";
  } else {
    tracerPic.className = "hide";
  }
});

var reaper = document.getElementById('reaper');
var reaperPic = document.getElementById('reaper-pic');

reaper.addEventListener("click", function() {
  if(reaperPic.className === "hide") {
    reaperPic.className = "";
  } else {
    reaperPic.className = "hide";
  }
});

var winston = document.getElementById('winston');
var winstonPic = document.getElementById('winston-pic');

winston.addEventListener("click", function() {
  if(winstonPic.className === "hide") {
    winstonPic.className = "";
  } else {
    winstonPic.className = "hide";
  }
});
*/

tracer.addEventListener("click", picLink);
reaper.addEventListener("click", picLink);
winston.addEventListener("click", picLink);

function picLink() {
  // hide every image first
  var allImages = document.querySelectorAll("img");
  for(var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }
  // 'this' ist das Element das angeklickt wurde. Man muss identifizieren können, welches
  // Element angeklickt wurde
  // console.log(this);
  // Get the attributes list
  var picId = this.attributes["data-img"].value;
  // console.log(picId);
  var pic = document.getElementById(picId);
  if(pic.className === "hide") {
      pic.className = "";
  } else {
    pic.className = "hide";
  }
}
