var score = 1; // Create a variable to store the score in

var title = new Title('You are the Pope'); // Create a title element
var button = new Button('Call a Crusade', btnPress);   // Create a button element
var button2 = new Button('Recruit units', botnPress);
var hidden = new Button('England has joined the Crusade');
hidden.hide();
var France = new Button('France has joined the Crusade');
France.hide();
var power = new Button('Balance of power');
power.hide();
var scr = new Text(score);                    // Create a text element

var text1 = new Text('Units on the field');

setInterval(btnPress, 1000);   // Set up a loop
setInterval(botnPress, 1000);

function botnPress() {
  score++;
}
function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 2) {
    hidden.show();
  }

  scr.edit(score); // Update the page with the new score
  if(score > 1) {
    button.hide();
  }

  scr.edit(score); // Update the page with the new score
  if(score > 2) {
    France.show();
  }
  scr.edit(score); // Update the page with the new score
  if(score > 2) {
    France.show();
  }

  scr.edit(score); // Update the page with the new score
  if(score > 2) {
    power.show();
  }

//England hide code
  scr.edit(score);
  if(score > 10) {
    hidden.hide();
  }
//France hide code
scr.edit(score);
if(score > 10) {
  France.hide();
}
}
