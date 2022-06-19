function testPunch() {
  var d = new Date();
  var n = d.toLocaleTimeString() + "<br>";
  var dayofWeek = d.getDay();
  if (dayofWeek == 1) {
    document.getElementById("timePunchMon").innerHTML += n;
  }
  if (dayofWeek == 2) {
    document.getElementById("timePunchTue").innerHTML += n;
  }
  if (dayofWeek == 3) {
    document.getElementById("timePunchWed").innerHTML += n;
  }
  if (dayofWeek == 4) {
    document.getElementById("timePunchThur").innerHTML += n;
  }
  if (dayofWeek == 5) {
    document.getElementById("timePunchFri").innerHTML += n;
  }
  if (dayofWeek == 6) {
    document.getElementById("timePunchSat").innerHTML += n;
  }
  if (dayofWeek == 0) {
    document.getElementById("timePunchSun").innerHTML += n;
  }
}
  
function currentTime(){
  document.getElementById('currentTime').innerHTML = new Date();
}
currentTime()

function dateMon(){
  var monDay = new Date();
  var monMonth = monDay.getMonth() + 1;
  var dayWeekmon = monDay.getDay();
  var monWeek = dayWeekmon - 1;
  var monDated = monDay.getDate();
  var datedMon = monDated - monWeek;
  document.getElementById("monDate").innerHTML = "Mon " + monMonth + "/" + datedMon;
}
dateMon()

const dateTue = () => {
  var tueDay = new Date();
  var tueMonth = tueDay.getMonth() + 1;
  var dayWeektue = tueDay.getDay();
  var tueWeek = dayWeektue - 2;
  var tueDated = tueDay.getDate();
  var datedTue = tueDated - tueWeek;
  document.getElementById('tueDate').innerHTML = "Tue" + tueMonth + "/" + datedTue;
}
dateTue()

const dateWed = () => {
  var wedDay = new Date();
  var wedMonth = wedDay.getMonth() + 1;
  var dayWeekwed = wedDay.getDay();
  var wedWeek = dayWeekwed - 3;
  var wedDated = wedDay.getDate();
  var datedWed = wedDated - wedWeek;
  document.getElementById('wedDate').innerHTML = "Wed" + wedMonth + "/" + datedWed;
}
dateWed()

const dateThur = () => {
  var thurDay = new Date();
  var thurMonth = thurDay.getMonth() + 1;
  var dayWeekthur = thurDay.getDay();
  var thurWeek = dayWeekthur - 4;
  var thurDated = thurDay.getDate();
  var datedThur = thurDated - thurWeek;
  document.getElementById('thurDate').innerHTML = "Thur" + thurMonth + "/" + datedThur;
}
dateThur()

const dateFri = () => {
  var friDay = new Date();
  var friMonth = friDay.getMonth() + 1;
  var dayWeekfri = friDay.getDay();
  var friWeek = dayWeekfri - 5;
  var friDated = friDay.getDate();
  var datedFri = friDated - friWeek;
  document.getElementById('friDate').innerHTML = "Fri" + friMonth + "/" + datedFri;
}
dateFri()

const dateSat = () => {
  var satDay = new Date();
  var satMonth = satDay.getMonth() + 1;
  var dayWeeksat = satDay.getDay();
  var satWeek = dayWeeksat - 6;
  var satDated = satDay.getDate();
  var datedSat = satDated - satWeek;
  document.getElementById('satDate').innerHTML = "Sat" + satMonth + "/" + datedSat;
}
dateSat()

const dateSun = () => {
  var sunDay = new Date();
  var sunMonth = sunDay.getMonth() + 1;
  var dayWeeksun = sunDay.getDay();
  var sunWeek = dayWeeksun - 7;
  var sunDated = sunDay.getDate();
  var datedSun = sunDated - sunWeek;
  document.getElementById('sunDate').innerHTML = "Sun" + sunMonth + "/" + datedSun;
}
dateSun()

function daysinMonth(month, year){  
  return new Date(year, month, 0).getDate();  
}
var toDay = new Date();
var thisYear = toDay.getFullYear();
var thisMonth = toDay.getMonth();
var daysMonth1 = daysinMonth(thisMonth, thisYear); 
