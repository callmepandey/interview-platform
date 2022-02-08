// import { v4 as uuidv4 } from './node_modules/uuid';
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

var indx = 0;
var speed = 60;

var intro = "Prepare for your coding interviews";

var info =
  "Dash is a realtime interview platform that is helpful for college students as it provides a coding environment for organizing mock coding interviews. So what are you waiting for? Get started with your first online coding interview on Dash.";

  document.getElementById("description").innerHTML = info;

function typeText() {
  if (indx < intro.length) {
    document.getElementById("intro").innerHTML += intro.charAt(indx);
    indx++;
    setTimeout(typeText, speed);
  }
}
typeText();

function meetid() {
  const roomid = uuidv4();
  // alert("Room Id: "+ roomid)
  document.getElementById("room_input").value = roomid;
}

document.getElementById("create_btn").addEventListener("click", function () {
  document.getElementById("room_id").style.display = "inline-block";
  meetid();
});

function myFunction() {
  var copyText = document.getElementById("room_input");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

document.getElementById("copy_btn").addEventListener("click", function () {
  myFunction();
});
