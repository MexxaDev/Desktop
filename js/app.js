const Hora = new Date();
let h = Hora.getHours();
let m = Hora.getMinutes();
let s = Hora.getSeconds();



var HoraActual = document.getElementById("hora");
var MinutoActual = document.getElementById("minuto");
var SegundoActual = document.getElementById("segundo");



var time = h + ":" + m + ":" + s;

HoraActual.innerHTML = time