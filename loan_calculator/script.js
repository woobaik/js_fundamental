window.onload = function() {
    const display = document.getElementById('display');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');

    var startTime, timer;

    startBtn.onclick = start;

    function start() {
        startBtn.onclick = null;

        stopBtn.onclick = stop;

        startTime = new Date();
        timer = setInterval( function() {
            var now = new Date();
            display.innerHTML = ((now - startTime)/1000).toFixed(2);
        }, 10)
    }

    function stop() {
        clearInterval(timer);
        startBtn.onclick = start;
    }
};