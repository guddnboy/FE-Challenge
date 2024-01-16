let TIME = 0;
    let timerInterval;

    const timer = document.querySelector('#displayTime');
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const resetBtn = document.querySelector('#reset');

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

    function updateTime() {
        let hours = Math.floor(TIME / 3600);
        let minutes = Math.floor((TIME % 3600) / 60);
        let seconds = TIME % 60;

        timer.innerText = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;
        TIME++;
    }

    function startTimer() {
        stopTimer();
        if (TIME === 0) {
            resetTimer();
        }
        timerInterval = setInterval(updateTime, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        TIME = 0;
        updateTime();
    }