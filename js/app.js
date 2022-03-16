



    let hora = document.getElementById('hora');
    let minuto = document.getElementById('minuto');
    let segundo = document.getElementById('segundo');

function time() {
    var Hora = new Date();

    let h = Hora.getHours();
    let m = Hora.getMinutes();
    let s = Hora.getSeconds();




    hora.innerHTML = h + ":";
    minuto.innerHTML = m + ":";
    segundo.innerHTML = s;
}

setInterval(time, 1000);