export const timer = (date) => {
  const timerDay = document.querySelectorAll(".timer-day");
  const timerHours = document.querySelectorAll(".timer-hours");
  const timerMinutes = document.querySelectorAll(".timer-minutes");
  const timerSeconds = document.querySelectorAll(".timer-seconds");
  const count = document.querySelectorAll(".count > span");

  const getMyTime = () => {
    const dateNow = new Date().getTime();
    const setDay = new Date(date).getTime();
    const timeRemaining = Math.floor((setDay - dateNow) / 1000);

    const getDay = Math.floor(timeRemaining / 60 / 60 / 24);
    const getHours = Math.floor(timeRemaining / 60 / 60) % 24;
    const getMinutes = Math.floor(timeRemaining / 60) % 60;
    const getSeconds = timeRemaining % 60;

    return { timeRemaining, getDay, getHours, getMinutes, getSeconds };
  };

  const updateTimer = () => {
    let countTime = getMyTime();

    timerDay.forEach((item) => {
      countTime.getDay < 10
        ? (item.textContent = `0${countTime.getDay}`)
        : (item.textContent = countTime.getDay);
    });

    timerHours.forEach((item) => {
      countTime.getHours < 10
        ? (item.textContent = `0${countTime.getHours}`)
        : (item.textContent = countTime.getHours);
    });

    timerMinutes.forEach((item) => {
      countTime.getMinutes < 10
        ? (item.textContent = `0${countTime.getMinutes}`)
        : (item.textContent = countTime.getMinutes);
    });

    timerSeconds.forEach((item) => {
      countTime.getSeconds < 10
        ? (item.textContent = `0${countTime.getSeconds}`)
        : (item.textContent = countTime.getSeconds);
    });

    if (countTime.timeRemaining > 0) {
      setTimeout(updateTimer, 1000);
    } else {
      count.forEach((item) => {
        item.textContent = "00";
      });
    }
  };
  updateTimer();
};
