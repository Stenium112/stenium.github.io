document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("NumworksSimu").style.visibility = "hidden"; // hide the simulator
});

function showCalculatorSimu(id) {
  if (id === 1) {
    document.getElementById("NumworksSimu").style.visibility = "visible";
  }
}

function ComingSoon() {
  alert("This feature will coming soon !");
}