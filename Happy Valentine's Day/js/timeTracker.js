var dateDisplay = document.getElementById("date");
var setDate = new Date("May 2, 2019 7:05:00").getTime();

function timer() {
  var dateNow = new Date().getTime();
  var anniv = dateNow - setDate;

  var years = Math.floor(anniv / (1000 * 60 * 60 * 24 * 365.25));
  var months = Math.floor(
    (anniv % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  var days = Math.floor(
    (anniv % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor((anniv % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((anniv % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((anniv % (1000 * 60)) / 1000);

  dateDisplay.innerHTML =
    years +
    "y " +
    months +
    "m " +
    days +
    "d " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s ";
}

var x = setInterval(timer, 1000);
