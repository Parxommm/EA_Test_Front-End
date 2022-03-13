const deadline = '2022-12-31';

function getTimeRemaining(endtime) {
  const timeRemaining = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((timeRemaining / (1000 * 60)) % 60),
        seconds = Math.floor((timeRemaining / 1000) % 60);
        
  return {
    'total': timeRemaining,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function addZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(endtime) {
  const  days = document.querySelector("#days"),
         hours = document.querySelector('#hours'),
         minutes = document.querySelector('#minutes'),
         seconds = document.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const timeObj = getTimeRemaining(endtime);

    days.textContent = addZero(timeObj.days);
    hours.textContent = addZero(timeObj.hours);
    minutes.textContent = addZero(timeObj.minutes);
    seconds.textContent = addZero(timeObj.seconds);

    if (timeObj.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

export {setClock, deadline};