var countDownDate = new Date("Jul 19, 2020 00:01:00").getTime();

var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("msg1").innerHTML = "Aguarde, faltam <br/><br/>"
    document.getElementById("days").innerHTML = days + " dias <br/>"
    document.getElementById("hours").innerHTML = hours + " horas <br/>"
    document.getElementById("mins").innerHTML = minutes + " minutos <br/>"
    document.getElementById("secs").innerHTML = seconds + " segundos <br/>"
    document.getElementById("msg3").innerHTML = "<br/> para você se emocionar!"
    document.getElementById("video").style.display = 'none'
    document.getElementById("iframe").style.display = 'none'
    document.getElementById("arvore1").style.display = 'none'
    document.getElementById("arvore2").style.display = 'none'
    document.getElementById("arvore3").style.display = 'none'

    if (timeleft < 0) {
        clearInterval(myfunc);        
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("msg1").innerHTML = " A espera acabou!<br /> Se liga na novidade: <br/>"
        document.getElementById("msg3").innerHTML = ""
        document.getElementById("video").style.display = 'block'
        document.getElementById("iframe").style.display = 'block'
        document.getElementById("arvore1").style.display = 'block'
        document.getElementById("arvore2").style.display = 'block'
        document.getElementById("arvore3").style.display = 'block'
       

    }
}, 1000)