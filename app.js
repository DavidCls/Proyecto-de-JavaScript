
var today=new Date();
var days=['Domingo', 'Lunes','Martes', 'Miercoles', 'Jueves','Viernes', 'Sabado'];
var months=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio', 'Julio', 'Enero', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'];

let weekDay=days[today.getDay()];//Dia semana
let monthDay=today.getDate;//Dia mes
let month=today.getMonth();//Mes
let monthName=months[month];
let year=today.getFullYear();//Año

var fecha=document.getElementById('fecha');//Otiene eñ eñemento h1 con ID=fecha
fecha.innerHTML= `${weekDay}, ${monthDay}, ${monthName}`;//Agregamos codigo html a fecha

var inputTarea=document.getElementById('inputTarea');
var btnAdd=document.getElementById('btnAdd');

btnAdd.addEventListener('click', function() { addElement(Event) });

function addElement(Event){
    alert(inputTarea.value);
}