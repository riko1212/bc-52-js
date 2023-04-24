const timerEl = document.querySelector('.js-timer-items');

const timer = {
  timerDedline: new Date(2023, 3, 24, 12, 59),
  timerEl: document.querySelector('.js-timer-items'),
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      const diff = this.timerDedline - Date.now();

      if (diff <= 0) {
        this.stop();
        return;
      }
      const obj = this.getTimeComponents(diff);
      const { days, hours, minutes, seconds } = obj;

      // if (seconds < 10) {
      //   seconds = '0' + seconds;
      // }
      //  if (hours < 10) {
      //    hours = '0' + hours;
      //  }
      //  if (minutes < 10) {
      //    minutes = '0' + minutes;
      //  }
      //  if (days < 10) {
      //    days = '0' + days;
      //  }

      // console.log(days, hours, minutes, seconds);
      this.timerEl.querySelector('.js-timer__days').textContent =
        this.pad(days);
      this.timerEl.querySelector('.js-timer__hours').textContent =
        this.pad(hours);
      this.timerEl.querySelector('.js-timer__minutes').textContent =
        this.pad(minutes);
      this.timerEl.querySelector('.js-timer__seconds').textContent =
        this.pad(seconds);

      this.timerEl.querySelector('.js-timer__days').dataset.title =
        this.declensionNum(days, ['день', 'дні', 'днів']);
      this.timerEl.querySelector('.js-timer__hours').dataset.title =
        this.declensionNum(hours, ['година', 'години', 'годин']);
      this.timerEl.querySelector('.js-timer__minutes').dataset.title =
        this.declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
      this.timerEl.querySelector('.js-timer__seconds').dataset.title =
        this.declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

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
    // 1
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },
};

timer.start();
