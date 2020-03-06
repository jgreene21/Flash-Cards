const button = document.getElementById("flip-card");
const button2 = document.getElementById("flip-card2");
const button3 = document.getElementById("flip-card3");

button.addEventListener("click", function() {
  const answer = document.getElementById("card1a");

  if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      button.textContent = "Hide Answer"
  }
  else {
      answer.classList.add("hide");
      button.textContent = "See Answer"
  }
});

button2.addEventListener("click", function() {
  const answer = document.getElementById("card2a");

  if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      button.textContent = "Hide Answer"
  }
  else {
      answer.classList.add("hide");
      button.textContent = "See Answer"
  }
});

button3.addEventListener("click", function() {
  const answer = document.getElementById("card3a");

  if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      button.textContent = "Hide Answer"
  }
  else {
      answer.classList.add("hide");
      button.textContent = "See Answer"
  }
});