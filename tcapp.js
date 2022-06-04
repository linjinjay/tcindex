function testPunch() {
  var a = "a";
  var d = new Date();
  var n = d.toLocaleTimeString() + "<br>";
  document.getElementById('timePunch').innerHTML += n;
}
  
function dateMon(){
  document.getElementById("monDate").innerHTML = new Date();

}
dateMon()