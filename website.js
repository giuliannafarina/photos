function changeButtonText() {
  var button = document.getElementById("myButton");
  button.innerHTML = "Learn More";
  var x = document.getElementById("myDIV");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    button.innerHTML = "Learn Less";
  }
}

// function getElementById("myButton")() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
