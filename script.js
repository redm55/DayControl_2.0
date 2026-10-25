const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const monthsElement = document.getElementById('months');

const currentYear = new Date().getFullYear();

const controlDate = new Date(`December 31 ${currentYear} 23:59:59`);

function countdownTimer() {
  const todayDate = Date.now();
  const gap = controlDate - todayDate;

  const d = Math.floor(gap / 1000 / 60 / 60 / 24);
  const h = Math.floor((gap / 1000 / 60 / 60) %24);
  const m = Math.floor((gap / 1000 / 60) % 60);
  const s = Math.floor((gap / 1000) % 60);

  const approxMonths = Math.round(d / 30);
  monthsElement.innerText = `≈${approxMonths} мес.`;
  
  days.innerText = d < 10 ? '0' + d : d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;
}
setInterval(countdownTimer, 1000);
