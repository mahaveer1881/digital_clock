let is24HourFormat = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  let period = '';
  if (!is24HourFormat) {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  hours = hours.toString().padStart(2, 0);
  const timeString = is24HourFormat
    ? `${hours}:${minutes}:${seconds}`
    : `${hours}:${minutes}:${seconds}<span class="am-pm">${period}</span> `;

  document.getElementById('clock').innerHTML = timeString;
}

function highlightSelectedButton(button) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => btn.classList.remove('selected'));
  button.classList.add('selected');
}

function toggleTo24Hour() {
  is24HourFormat = true;
  updateClock();
  highlightSelectedButton(document.getElementById('btn-24hr'));
}
function toggleTo12Hour() {
  is24HourFormat = false;
  updateClock();
  highlightSelectedButton(document.getElementById('btn-12hr'));
}

document.getElementById('btn-24hr').addEventListener('click', toggleTo24Hour);
document.getElementById('btn-12hr').addEventListener('click', toggleTo12Hour);

highlightSelectedButton(document.getElementById('btn-24hr'));
updateClock();
setInterval(updateClock, 1000);
