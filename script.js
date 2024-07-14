var popup = document.getElementById("formPopup");
var btn = document.getElementById("openFormBtn");
var span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
  popup.style.display = "block";
}

span.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}


function checkForm() {
  var form = document.getElementById("myForm");
  if (form.checkValidity()) {
    window.location.href = "block.html";
  } else {
    alert("Please fill in all required fields");
  }
}


