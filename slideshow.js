let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function setSlide(n) {
  showSlide(slideIndex = n);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

document.getElementById("quiz-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const answers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "a"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const resultDiv = document.getElementById("quiz-result");
  resultDiv.style.display = "block";

  if (score === total) {
    resultDiv.innerHTML = `<p>🎉 OMG! You remember everything! You're the best part of us 💖</p>
    <p>Here’s your bonus surprise: <a href="IMG_3083.jpg" download>🎁 Click to claim</a></p>`;
  } else if (score >= 2) {
    resultDiv.innerHTML = `<p>💌 Not bad! You know me so well 🥺</p>`;
  } else {
    resultDiv.innerHTML = `<p>😂 You need a refresher! More dates coming your way!</p>`;
  }
});
function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function revealSurprise() {
  const surprise = document.getElementById("surprise-content");
  const button = document.getElementById("surprise-btn");
  const video = document.getElementById("memory-video");

  surprise.style.display = "block";
  button.style.display = "none";

  // Auto-play the video when revealed
  video.play();
}