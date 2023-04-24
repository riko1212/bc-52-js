TIMER_DEDLINE = new Date(2022, 8, 9);
const timerEl = document.querySelector('.js-timer-items');

const timer = {
  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, 0);
  },

  declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },
};

// this.declensionNum(days, ['день', 'дні', 'днів']);
// this.declensionNum(hours, ['година', 'години', 'годин']);
// this.declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
// this.declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
