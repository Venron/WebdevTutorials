function e() {
  alert("hi");
  alert("hello");
}

function print(s) {
  document.getElementById('output').innerHTML = s;
}

var list = ['apples', 'meatballs', 'bananas'];
// list[2]();
/*
var p = list.pop() + "X";
print(p);
p += list.pop() + "X";
print(p);
p += list.pop() + "X";
print(p);
p += list.pop() + "X";
print(p);
*/

/*
list.forEach(function(value, index) {
  //alert("I have " + value + " in my shipping bag");
  console.log("I have " + value + " in my shipping bag");
});
*/

/*
for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}
*/

/*
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('p')[1]);
console.log(document.getElementById('checklist'));
console.log("Done: " + document.querySelector('.done');
*/

/*
var firstP = document.getElementsByTagName('p')[0];
firstP.innerHTML = "New content";

var secondP = document.getElementById('second');
secondP.innerHTML = "Second new <strong>content</strong>";
*/

var li = document.querySelector('.done');
/*
console.log(li);
console.log("Before change: " + li.className); // class = "done"
li.className = "";
console.log("After change: " + li.className); // class = "" (removed)
li.className = "done also-done";
console.log("After add: " + li.className); // class = "" (add)
li.className = li.className + " another-class more-classes";
console.log("After add: " + li.className); // class = "" (add)
console.log("li.classList: " + li.classList);
li.classList.remove('more-classes');
console.log("li.classList: " + li.classList);
*/

console.log(li.parentElement);
console.log(li.parentElement.children);
