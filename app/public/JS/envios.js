// Temporizador para redirecionamento automático
let timeLeft = 3;
const countdownElement = document.getElementById("countdown");

const countdown = setInterval(() => {
  timeLeft--;
  countdownElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    window.location.href = "/";
  }
}, 1000);
