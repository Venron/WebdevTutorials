var checklist = document.getElementById('checklist');

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for(var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  // wenn keypress als Event ausgewählt wird, wird der Funktion automatisch von der Runtime
  // ein Event-Objekt mitgegeben
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  // setSelectionRange gibt an, wieviel Buchstaben aus dem Textfeld markiert werden sollen
  // Hier: Alle Buchstaben
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  // console.log(event.which);
  if(event.which == 13) {
    // this.previousElementSibling.innerHTML = this.value;
    // this.parentNode.className = "";
    updateItem.call(this);
  }
}
