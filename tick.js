function clock() {
    var e = new Date();
    var hours = e.getHours();
    var minutes = e.getMinutes();
    var seconds = e.getSeconds();
    var am_or_pm = document.getElementById('am_or_pm');
    if (hours >= 12) {
        am_or_pm.innerHTML = "PM"
    } else {
        am_or_pm.innerHTML = "AM"
    }


    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}
//1000 signifying 1 second
setInterval(clock, 1000);