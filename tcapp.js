function testPunch() {
  var a = "a";
  var d = new Date();
  var n = d.toLocaleTimeString() + "<br>";
  document.getElementById('timePunch').innerHTML += n;
}
  
function dateMon(){
  var monDay = new Date();
  var monMonth = monDay.getMonth() + 1;
  var monDated = monDay.getDate();
  document.getElementById("monDate").innerHTML = "Mon " + monMonth + "/" + monDated;


}
dateMon()

function currentTime(){
  document.getElementById('currentTime').innerHTML = new Date();
}
currentTime()

const dateTue = () => {
  var tueDay = new Date();
  var tueMonth = tueDay.getMonth() + 1;
  var tueDated = tueDay.getDate();
  document.getElementById('tueDate').innerHTML = "Tue" + tueMonth + "/" + tueDated;
}
dateTue()
