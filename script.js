
function login(element) {
  if (element.innerText == "Login") {
    element.innerText = "Logout";
  } else {
    element.innerText = "Login";
  }
}

function likes() {
  alert("Someone Liked Your Defiinition");
}

function remove(element) {
    element.remove();
}