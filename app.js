const PI = 3.14;
let rayon;
let surface;

document.getElementById("myBtn").onclick = function () {
  rayon = document.getElementById("myText").value;
  rayon = Number(rayon);
  surface = PI * rayon ** 2;
  document.getElementById("myH3").textContent = `La surface est ${surface}`;
};
