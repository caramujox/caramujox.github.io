var countDownDate = new Date("Jul 18, 2020 00:00:00").getTime();

var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " dias : <br/>"
    document.getElementById("hours").innerHTML = hours + " horas : <br/>"
    document.getElementById("mins").innerHTML = minutes + " minutos : <br/>"
    document.getElementById("secs").innerHTML = seconds + " segundos"

    if (timeleft < 0) {
        window.location.replace("https://www.youtube.com/watch?v=om3n2ni8luE&list=RDom3n2ni8luE&start_radio=1")

    }
}, 1000)